/**
 * Comprueba que toda ruta de imagen del proyecto sea absoluta y exista en /public.
 *
 * Nace de un fallo real: `lib/constants.ts` tenía "preimpresion-01.jpg" sin barra
 * inicial. Como se pintaba con `background-image: url(...)`, el navegador resolvía
 * la ruta relativa contra la URL del documento y funcionaba por casualidad. Al
 * migrar a `next/image`, que exige ruta absoluta, la imagen desapareció.
 *
 * Se ejecuta antes de `next build`, así que un fallo así ya no llega a producción.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const SCAN_DIRS = ["app", "components", "lib"];
const ASSET_RE = /\.(jpg|jpeg|png|webp|avif|svg|gif|ico)$/i;

/** Formas en que el proyecto declara una imagen. */
const PATTERNS = [
	// image: "...", icon: "...", backImage: "...", logo: "..."
	/\b(?:image|icon|backImage|imagePath|logo|OG_IMAGE_PATH)\s*[:=]\s*"([^"`$]+?)"/g,
	// src="..." y src={"..."}
	/\bsrc=\{?"([^"`$]+?)"\}?/g,
	// clases de Tailwind: bg-[url('...')]
	/bg-\[url\((?:'|&apos;|")([^)'"]+)(?:'|&apos;|")\)\]/g,
	// backgroundImage: "url(...)"  (solo literales, no plantillas)
	/backgroundImage:\s*"url\(([^)]+)\)"/g,
];

function walk(dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else if ([".ts", ".tsx", ".js", ".jsx"].includes(extname(full))) out.push(full);
	}
	return out;
}

const problems = [];

function check(rawPath, file, source) {
	const path = rawPath.trim();

	// Ignoramos lo que no es un asset local: URLs, data:, rutas dinámicas.
	if (!ASSET_RE.test(path)) return;
	if (/^(https?:|data:|blob:)/.test(path)) return;
	if (path.includes("${") || path.includes("{")) return;

	if (!path.startsWith("/")) {
		problems.push({
			file,
			path,
			reason: "ruta relativa: debe empezar por «/» para que next/image la resuelva",
		});
		return;
	}
	if (!existsSync(join(PUBLIC, decodeURIComponent(path)))) {
		problems.push({ file, path, reason: `no existe en /public${source}` });
	}
}

// 1. Código fuente
for (const dir of SCAN_DIRS) {
	for (const file of walk(join(ROOT, dir))) {
		const code = readFileSync(file, "utf8");
		for (const re of PATTERNS) {
			re.lastIndex = 0;
			for (const m of code.matchAll(re)) {
				check(m[1], file.replace(`${ROOT}/`, ""), "");
			}
		}
	}
}

// 2. Portadas de los artículos del blog
const postsDir = join(ROOT, "content/posts");
if (existsSync(postsDir)) {
	for (const name of readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))) {
		const front = readFileSync(join(postsDir, name), "utf8").split(/^---$/m)[1] ?? "";
		const m = front.match(/^image:\s*"?([^"\n]+)"?/m);
		if (m) check(m[1], `content/posts/${name}`, " (portada del artículo)");
	}
}

if (problems.length > 0) {
	console.error(`\n✗ ${problems.length} ruta(s) de imagen con problemas:\n`);
	for (const p of problems) {
		console.error(`  ${p.file}`);
		console.error(`    ${p.path}  →  ${p.reason}\n`);
	}
	process.exit(1);
}

console.log("✓ rutas de imagen correctas");
