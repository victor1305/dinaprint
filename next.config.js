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
	// El dominio canónico es el apex. Coolify/Cloudflare resolvían `www` con un
	// 307 temporal, que Search Console trataba como propiedad aparte en lugar de
	// consolidar señales. Un 308 permanente (`permanent: true`) sí las une.
	async redirects() {
		return [
			{
				source: "/:path*",
				has: [{ type: "host", value: "www.dinaprint.com" }],
				destination: "https://dinaprint.com/:path*",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
