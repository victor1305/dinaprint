#!/usr/bin/env python3
"""
PreToolUse: impide editar los lockfiles a mano.

En el repo conviven `bun.lock` y `package-lock.json`. Editar cualquiera de los
dos a mano los desincroniza del árbol de dependencias real y produce builds que
funcionan en local y fallan en Docker. Se regeneran con el gestor, nunca a mano.
"""
import json
import os
import sys

LOCKFILES = {"package-lock.json", "bun.lock", "bun.lockb", "yarn.lock", "pnpm-lock.yaml"}


def main():
	try:
		event = json.load(sys.stdin)
	except (json.JSONDecodeError, ValueError):
		sys.exit(0)

	path = (event.get("tool_input") or {}).get("file_path") or ""
	if os.path.basename(path) not in LOCKFILES:
		sys.exit(0)  # sin decisión: sigue el flujo normal de permisos

	name = os.path.basename(path)
	print(
		json.dumps(
			{
				"hookSpecificOutput": {
					"hookEventName": "PreToolUse",
					"permissionDecision": "deny",
					"permissionDecisionReason": (
						f"{name} no se edita a mano. En este repo conviven bun.lock y "
						"package-lock.json, y desincronizarlos provoca builds que pasan en "
						"local y fallan en Docker. Regenéralo con el gestor "
						"(`npm install` / `bun install`), o pide confirmación explícita al "
						"usuario si de verdad hace falta tocarlo."
					),
				}
			}
		)
	)
	sys.exit(0)


if __name__ == "__main__":
	main()
