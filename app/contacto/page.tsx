import { Contact } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { JsonLd } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contacto: imprenta en Pinto (Madrid)",
	description:
		"Contacta con nuestra imprenta en Pinto (Madrid, sur de Madrid) para presupuestos de impresión digital y offset, papelería corporativa, folletos, carteles y packaging.",
	alternates: {
		canonical: "/contacto",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Contacto: imprenta en Pinto (Madrid)",
		url: absoluteUrl("/contacto"),
		description:
			"Contacta con nuestra imprenta en Pinto (Madrid, sur de Madrid) para presupuestos de impresión digital y offset, papelería corporativa, folletos, carteles y packaging.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Contacto Dinaprint")],
	},
	twitter: {
		title: "Contacto: imprenta en Pinto (Madrid)",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"contacto imprenta",
		"imprenta pinto",
		"imprenta madrid sur",
		"presupuesto imprenta",
		"impresión digital madrid",
		"impresión offset madrid",
	],
};

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<Contact />
		</main>
	);
}
