import { AboutUs } from "@/components/organisms";
import { absoluteUrl } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre nosotros: imprenta con experiencia en Madrid",
	description:
		"Más de 25 años de experiencia en comunicación gráfica e impresión. Imprenta en Madrid (Pinto, sur de Madrid) con asesoramiento y acabados de calidad.",
	alternates: {
		canonical: "/sobre-nosotros",
	},
	openGraph: {
		title: "Sobre nosotros: imprenta con experiencia en Madrid",
		url: absoluteUrl("/sobre-nosotros"),
		images: [{ url: absoluteUrl("/slider-principal-dinaprint.jpg") }],
	},
	twitter: {
		title: "Sobre nosotros: imprenta con experiencia en Madrid",
		images: [absoluteUrl("/slider-principal-dinaprint.jpg")],
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
			<AboutUs />
		</main>
	);
}
