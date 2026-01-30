import { Main } from "@/components/organisms";
import { absoluteUrl } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
	description:
		"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
		url: absoluteUrl("/"),
		images: [{ url: absoluteUrl("/slider-principal-dinaprint.jpg") }],
	},
	twitter: {
		title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
		images: [absoluteUrl("/slider-principal-dinaprint.jpg")],
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
			<Main />
		</main>
	);
}
