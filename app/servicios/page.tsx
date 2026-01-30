import { Services } from "@/components/organisms";
import { absoluteUrl } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Servicios de imprenta: impresión digital, offset y acabados",
	description:
		"Servicios de imprenta en Madrid (Pinto, sur de Madrid): preimpresión, impresión offset y digital, acabados y manipulados, distribución y envíos.",
	alternates: {
		canonical: "/servicios",
	},
	openGraph: {
		title: "Servicios de imprenta: impresión digital, offset y acabados",
		url: absoluteUrl("/servicios"),
		images: [{ url: absoluteUrl("/slider-principal-dinaprint.jpg") }],
	},
	twitter: {
		title: "Servicios de imprenta: impresión digital, offset y acabados",
		images: [absoluteUrl("/slider-principal-dinaprint.jpg")],
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
			<Services />
		</main>
	);
}
