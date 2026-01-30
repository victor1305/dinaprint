import { Main } from "@/components/organisms";
import { absoluteUrl, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
	description:
		"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
		url: absoluteUrl("/"),
		description:
			"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
		images: [
			{ url: absoluteUrl("/slider-principal-dinaprint.jpg"), width: 1200, height: 630, alt: "Imprenta Dinaprint" },
		],
	},
	twitter: {
		title: "Imprenta en Madrid (Pinto) | Impresión digital y offset",
		description:
			"Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.",
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
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(getLocalBusinessSchema())}
			</script>
			<Main />
		</main>
	);
}
