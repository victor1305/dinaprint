/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// AVIF y WebP reducen mucho el peso frente al JPEG original.
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
