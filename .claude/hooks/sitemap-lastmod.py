#!/usr/bin/env python3
"""
PostToolUse: recuerda actualizar ROUTE_LAST_MODIFIED al editar una página estática.

app/sitemap.ts mantiene a mano la fecha real de última edición de cada ruta,
justo para no emitir `new Date()` en cada despliegue. Es un paso que se olvida,
así que el hook avisa cuando la ruta editada no lleva la fecha de hoy.
"""
import datetime
import json
import os
import re
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITEMAP = os.path.join(PROJECT, "app", "sitemap.ts")


def emit(**payload):
	if payload:
		print(json.dumps(payload))
	sys.exit(0)


def route_for(rel):
	"""app/catalogo/roll-up/page.tsx -> /catalogo/roll-up ; app/page.tsx -> /"""
	parts = rel.split(os.sep)
	if parts[0] != "app" or parts[-1] != "page.tsx":
		return None
	segments = parts[1:-1]
	# Las rutas dinámicas (blog) sacan su fecha del frontmatter, no del mapa.
	if any(s.startswith("[") for s in segments):
		return None
	return "/" + "/".join(segments) if segments else "/"


def main():
	try:
		event = json.load(sys.stdin)
	except (json.JSONDecodeError, ValueError):
		emit()

	path = (event.get("tool_input") or {}).get("file_path") or ""
	if not path.endswith("page.tsx"):
		emit()

	path = os.path.abspath(path)
	if not path.startswith(PROJECT + os.sep):
		emit()

	route = route_for(os.path.relpath(path, PROJECT))
	if route is None or not os.path.isfile(SITEMAP):
		emit()

	today = datetime.date.today().isoformat()
	sitemap = open(SITEMAP, encoding="utf-8").read()
	entry = re.search(r'"' + re.escape(route) + r'":\s*"(\d{4}-\d{2}-\d{2})"', sitemap)

	if entry is None:
		emit(
			systemMessage=f"{route} no está en ROUTE_LAST_MODIFIED",
			additionalContext=(
				f"Has editado la página `{route}`, que no aparece en ROUTE_LAST_MODIFIED "
				f"de app/sitemap.ts. Si es una ruta nueva, hay que darla de alta con la "
				f"fecha {today}; si no debe indexarse, ignora este aviso."
			),
		)

	if entry.group(1) != today:
		emit(
			systemMessage=f"lastmod de {route} sigue en {entry.group(1)}",
			additionalContext=(
				f"Has editado `{route}` pero su fecha en ROUTE_LAST_MODIFIED "
				f"(app/sitemap.ts) sigue siendo {entry.group(1)}. Si el cambio afecta al "
				f"contenido publicado, actualízala a {today}. Si era un cambio interno "
				f"(comentario, refactor sin efecto visible), déjala como está: el lastmod "
				f"debe reflejar ediciones reales."
			),
		)

	emit()


if __name__ == "__main__":
	main()
