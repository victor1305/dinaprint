import { Services } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { JsonLd } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Servicios de imprenta: digital, offset y acabados",
	description:
		"Servicios de imprenta en Madrid (Pinto, sur de Madrid): preimpresión, impresión offset y digital, acabados y manipulados, distribución y envíos.",
	alternates: {
		canonical: "/servicios",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Servicios de imprenta: digital, offset y acabados",
		url: absoluteUrl("/servicios"),
		description:
			"Servicios: asesoramiento, preimpresión, impresión digital y offset, acabados y distribución.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Servicios Dinaprint")],
	},
	twitter: {
		title: "Servicios de imprenta: digital, offset y acabados",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"servicios imprenta",
		"impresión digital madrid",
		"impresión offset madrid",
		"preimpresión",
		"acabados impresión",
		"troquelado",
		"plastificado",
	],
};

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<Services />
		</main>
	);
}
