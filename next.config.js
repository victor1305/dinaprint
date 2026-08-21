/** @type {import('next').NextConfig} */
const nextConfig = {
	// Salida autocontenida: el contenedor solo necesita `node server.js`,
	// sin node_modules completo. Reduce mucho la imagen y la RAM en Coolify.
	output: "standalone",
	eslint: {
		// El proyecto usa Biome (`npm run lint`); eslint no está instalado y su
		// ausencia solo ensucia el log del build en Docker.
		ignoreDuringBuilds: true,
	},
	images: {
		// AVIF y WebP reducen mucho el peso frente al JPEG original.
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
