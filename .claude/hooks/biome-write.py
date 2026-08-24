#!/usr/bin/env python3
"""
PostToolUse: pasa Biome por el fichero que se acaba de editar.

`npm run lint` es `biome check .`, y el formateo de Biome (tabuladores, ancho de
línea, arrays multilínea) rompe el check con facilidad al editar a mano. Este
hook aplica las correcciones seguras en el momento, en lugar de descubrirlas
al final del build.
"""
import json
import os
import subprocess
import sys

EXTS = (".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json", ".jsonc")
PROJECT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def emit(**payload):
	if payload:
		print(json.dumps(payload))
	sys.exit(0)


def main():
	try:
		event = json.load(sys.stdin)
	except (json.JSONDecodeError, ValueError):
		emit()

	path = (event.get("tool_input") or {}).get("file_path") or ""
	if not path or not path.endswith(EXTS):
		emit()

	path = os.path.abspath(path)
	# Solo ficheros del proyecto, nunca dependencias ni artefactos del build.
	if not path.startswith(PROJECT + os.sep) or not os.path.isfile(path):
		emit()
	rel = os.path.relpath(path, PROJECT)
	if rel.split(os.sep)[0] in {"node_modules", ".next", "out", "build"}:
		emit()

	biome = os.path.join(PROJECT, "node_modules", ".bin", "biome")
	if not os.path.isfile(biome):
		emit()

	before = open(path, "rb").read()
	try:
		# --write aplica solo las correcciones seguras; las inseguras exigen --unsafe.
		result = subprocess.run(
			[biome, "check", "--write", rel],
			cwd=PROJECT,
			capture_output=True,
			text=True,
			timeout=30,
		)
	except (subprocess.TimeoutExpired, OSError):
		emit()

	changed = open(path, "rb").read() != before

	if result.returncode != 0:
		# Quedan errores que Biome no arregla solo: que los vea Claude.
		tail = (result.stderr or result.stdout or "").strip()[-1500:]
		emit(
			systemMessage=f"Biome deja errores sin resolver en {rel}",
			additionalContext=f"`biome check --write {rel}` terminó con errores:\n{tail}",
		)

	if changed:
		emit(
			systemMessage=f"Biome ha reformateado {rel}",
			additionalContext=(
				f"El hook aplicó `biome check --write` sobre {rel} y el fichero cambió. "
				"Si necesitas su contenido exacto, vuelve a leerlo antes de editarlo."
			),
		)

	emit()


if __name__ == "__main__":
	main()
