/**
 * Genera las versiones 1200x630 de las imágenes que se comparten en redes.
 *
 * Nace de un fallo real: todas las páginas declaraban `og:image:width 1200` y
 * `og:image:height 630`, pero ninguna imagen tenía esa medida (la portada era
 * 1922x719 y varias de catálogo eran cuadradas de 575x575). Facebook, WhatsApp,
 * X y LinkedIn cachean la primera respuesta y recortan por su cuenta, así que la
 * tarjeta salía descuadrada y las medidas declaradas eran mentira.
 *
 * Cada imagen referenciada con `ogImage()` (o portada de artículo) se recorta a
 * 1200x630 en /public/og. Se ejecuta antes de `next build`.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join } from "node:path";

import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const OUT_DIR = join(PUBLIC, "og");
const SCAN_DIRS = ["app", "components", "lib"];

/** Medida recomendada por Facebook, X y LinkedIn para la tarjeta grande. */
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

function walk(dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else if ([".ts", ".tsx"].includes(extname(full))) out.push(full);
	}
	return out;
}

/** Rutas de origen: llamadas a `ogImage("/x.jpg")` y portadas del blog. */
function collectSources() {
	const sources = new Set();

	const files = SCAN_DIRS.flatMap((dir) => walk(join(ROOT, dir)));
	const code = new Map(files.map((file) => [file, readFileSync(file, "utf8")]));

	// Varias páginas guardan la ruta en una constante (`const IMAGE = "/x.jpg"`,
	// `OG_IMAGE_PATH` en lib/seo.ts), a veces en otro archivo: mapa único.
	const consts = new Map();
	for (const source of code.values()) {
		for (const m of source.matchAll(/(?:const|let)\s+([A-Z_][A-Z0-9_]*)\s*=\s*"([^"]+)"/g)) {
			consts.set(m[1], m[2]);
		}
	}

	for (const source of code.values()) {
		for (const m of source.matchAll(/\bogImage(?:Url)?\(\s*("[^"]+"|[A-Z_][A-Z0-9_]*)/g)) {
			const arg = m[1];
			const path = arg.startsWith('"') ? arg.slice(1, -1) : consts.get(arg);
			// `ogImage(post.image, …)` es dinámico: se cubre con el frontmatter.
			if (path) sources.add(path);
		}
	}

	const postsDir = join(ROOT, "content/posts");
	if (existsSync(postsDir)) {
		for (const name of readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))) {
			const front = readFileSync(join(postsDir, name), "utf8").split(/^---$/m)[1] ?? "";
			const m = front.match(/^image:\s*"?([^"\n]+)"?/m);
			if (m) sources.add(m[1].trim());
		}
	}

	return [...sources].sort();
}

/** Misma convención que `ogImage()` en lib/seo.ts: /foo.jpg → /og/foo.jpg */
function outputName(path) {
	return `${basename(path, extname(path))}.jpg`;
}

mkdirSync(OUT_DIR, { recursive: true });

const missing = [];
let generated = 0;
let skipped = 0;

for (const path of collectSources()) {
	const src = join(PUBLIC, decodeURIComponent(path));
	if (!existsSync(src)) {
		missing.push(path);
		continue;
	}

	const dest = join(OUT_DIR, outputName(path));
	// Solo se regenera si el original es más nuevo que la versión ya recortada.
	if (existsSync(dest) && statSync(dest).mtimeMs >= statSync(src).mtimeMs) {
		skipped++;
		continue;
	}

	await sharp(src)
		// `attention` centra el recorte en la zona con más detalle, que en fotos de
		// producto es el producto y no el fondo.
		.resize(OG_WIDTH, OG_HEIGHT, { fit: "cover", position: sharp.strategy.attention })
		.jpeg({ quality: 82, mozjpeg: true })
		.toFile(dest);

	generated++;
}

if (missing.length > 0) {
	console.error(`\n✗ ${missing.length} imagen(es) de origen no existen en /public:\n`);
	for (const path of missing) console.error(`  ${path}`);
	console.error("");
	process.exit(1);
}

console.log(`✓ imágenes og: ${generated} generada(s), ${skipped} sin cambios`);
