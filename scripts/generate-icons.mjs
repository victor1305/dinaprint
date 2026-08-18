/**
 * Genera los iconos del sitio a partir de la imagen de portada.
 *
 * El favicon.ico histórico es un recorte circular del ojo de
 * /slider-principal-dinaprint.jpg, pero a 133x133 y sin equivalentes PNG: iOS no
 * tenía apple-touch-icon (usaba una captura de la web al añadirla a la pantalla
 * de inicio) y Android no tenía iconos de manifest.
 *
 * No forma parte del build: se ejecuta a mano (`node scripts/generate-icons.mjs`)
 * si cambia la imagen de marca, y el resultado se versiona.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";

import sharp from "sharp";

const ROOT = process.cwd();
const SOURCE = join(ROOT, "public/slider-principal-dinaprint.jpg");

/** Cuadrado a toda altura centrado en el ojo, dentro del original de 1922x719.
 * Es el encuadre del favicon.ico original: iris más el párpado de purpurina. */
const CROP = { left: 713, top: 0, width: 719, height: 719 };

const square = () => sharp(SOURCE).extract(CROP);

/** Máscara circular, para que el icono de pestaña conserve la forma del favicon. */
function circleMask(size) {
	return Buffer.from(
		`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
	);
}

async function circular(size, dest) {
	const image = await square().resize(size, size).png().toBuffer();
	await sharp(image)
		.composite([{ input: circleMask(size), blend: "dest-in" }])
		.png({ palette: true, quality: 90 })
		.toFile(dest);
}

async function plain(size, dest) {
	// iOS y Android recortan la esquina por su cuenta y la transparencia se ve
	// negra, así que estos van cuadrados y opacos.
	// `palette` baja un icono de 512 px de ~600 KB a ~100 KB sin diferencia visible.
	await square().resize(size, size).png({ palette: true, quality: 90 }).toFile(dest);
}

/**
 * favicon.ico de 32x32. El .ico anterior era de 133x133, una medida que ningún
 * navegador pide y que obliga a reescalar. Un .ico puede contener un PNG tal
 * cual: cabecera de 6 bytes + entrada de 16 + los bytes del PNG.
 */
async function ico(dest) {
	const size = 32;
	const png = await sharp(await square().resize(size, size).png().toBuffer())
		.composite([{ input: circleMask(size), blend: "dest-in" }])
		.png({ palette: true, quality: 90 })
		.toBuffer();

	const header = Buffer.alloc(22);
	header.writeUInt16LE(0, 0); // reservado
	header.writeUInt16LE(1, 2); // tipo: icono
	header.writeUInt16LE(1, 4); // nº de imágenes
	header.writeUInt8(size, 6);
	header.writeUInt8(size, 7);
	header.writeUInt8(0, 8); // paleta: 0 = sin paleta fija
	header.writeUInt8(0, 9); // reservado
	header.writeUInt16LE(1, 10); // planos
	header.writeUInt16LE(32, 12); // bits por píxel
	header.writeUInt32LE(png.length, 14);
	header.writeUInt32LE(header.length, 18);

	writeFileSync(dest, Buffer.concat([header, png]));
}

await circular(32, join(ROOT, "app/icon.png"));
await ico(join(ROOT, "app/favicon.ico"));
await plain(180, join(ROOT, "app/apple-icon.png"));
await plain(192, join(ROOT, "public/icon-192.png"));
await plain(512, join(ROOT, "public/icon-512.png"));

console.log("✓ iconos generados");
