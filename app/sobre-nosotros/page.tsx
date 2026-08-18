import { AboutUs } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { JsonLd } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre nosotros: imprenta con experiencia en Madrid",
	description:
		"Más de 25 años de experiencia en comunicación gráfica e impresión. Imprenta en Madrid (Pinto, sur de Madrid) con asesoramiento y acabados de calidad.",
	alternates: {
		canonical: "/sobre-nosotros",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Sobre nosotros: imprenta con experiencia en Madrid",
		url: absoluteUrl("/sobre-nosotros"),
		description:
			"Más de 25 años de experiencia en comunicación gráfica e impresión. Imprenta en Madrid (Pinto, sur de Madrid) con asesoramiento y acabados de calidad.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Sobre Dinaprint")],
	},
	twitter: {
		title: "Sobre nosotros: imprenta con experiencia en Madrid",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"imprenta madrid",
		"imprenta pinto",
		"comunicación gráfica",
		"impresión offset",
		"impresión digital",
	],
};

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<AboutUs />
		</main>
	);
}
