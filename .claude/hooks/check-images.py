#!/usr/bin/env python3
"""
PostToolUse: adelanta el guardián de imágenes del build al momento de la edición.

`scripts/check-images.mjs` solo corre dentro de `npm run build`, así que una ruta
de imagen mal escrita no se descubre hasta minutos después —o hasta el build de
Docker en Coolify—. Tarda 0,2 s, así que compensa ejecutarlo en cada edición de
un fichero que pueda declarar imágenes.

Se invoca el script real en lugar de reimplementar sus expresiones regulares:
así el hook y el build no pueden divergir.
"""
import json
import os
import subprocess
import sys

# El script escanea app/, components/, lib/ y las portadas de content/posts.
WATCHED = (".ts", ".tsx", ".js", ".jsx", ".mdx")
PROJECT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPT = os.path.join(PROJECT, "scripts", "check-images.mjs")


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
	if not path.endswith(WATCHED) or not os.path.isfile(SCRIPT):
		emit()

	path = os.path.abspath(path)
	if not path.startswith(PROJECT + os.sep):
		emit()
	rel = os.path.relpath(path, PROJECT)
	top = rel.split(os.sep)[0]
	if top not in {"app", "components", "lib", "content"}:
		emit()

	try:
		result = subprocess.run(
			["node", SCRIPT], cwd=PROJECT, capture_output=True, text=True, timeout=30
		)
	except (subprocess.TimeoutExpired, OSError):
		emit()

	if result.returncode != 0:
		detail = (result.stderr or result.stdout or "").strip()[-2000:]
		emit(
			systemMessage="check-images: hay rutas de imagen rotas",
			additionalContext=(
				"`scripts/check-images.mjs` falla, así que el build también fallará. "
				"Toda ruta debe ser absoluta (empezar por «/») y existir en /public:\n"
				f"{detail}"
			),
		)

	emit()


if __name__ == "__main__":
	main()
