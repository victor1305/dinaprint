import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

import type { MetadataRoute } from "next";

/** Habilita "Añadir a pantalla de inicio" en Android con nombre e iconos propios. */
export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${SITE_NAME} · Imprenta en Madrid (Pinto)`,
		short_name: SITE_NAME,
		description: SITE_DESCRIPTION,
		lang: "es-ES",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#ff6b00",
		icons: [
			{ src: "/icon-192.png", sizes: "192x192", type: "image/png" },
			{ src: "/icon-512.png", sizes: "512x512", type: "image/png" },
			{ src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
		],
	};
}
