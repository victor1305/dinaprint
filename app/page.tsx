import { Main } from "@/components/organisms";
import {
	OG_DEFAULTS,
	absoluteUrl,
	getLocalBusinessSchema,
	getOrganizationSchema,
	getWebSiteSchema,
	ogImage,
	ogImageUrl,
} from "@/lib/seo";

import { JsonLd } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
	description:
		"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
		url: absoluteUrl("/"),
		description:
			"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Imprenta Dinaprint")],
	},
	twitter: {
		title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
		description:
			"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"imprenta madrid",
		"imprenta pinto",
		"imprenta sur de madrid",
		"impresión digital madrid",
		"impresión offset madrid",
		"papelería corporativa",
		"folletos",
		"carteles",
		"packaging",
		"regalo promocional",
	],
};

export default async function Page() {
	return (
		<main>
			<JsonLd data={getOrganizationSchema()} />
			<JsonLd data={getWebSiteSchema()} />
			<JsonLd data={getLocalBusinessSchema()} />
			<Main />
		</main>
	);
}
