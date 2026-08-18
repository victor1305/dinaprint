import { Catalog } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, ogImage, ogImageUrl } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Catálogo de productos de imprenta",
	description:
		"Catálogo de productos de imprenta: papelería corporativa, folletos y revistas, carteles, packaging, expositores, roll up, calendarios y regalo promocional.",
	alternates: {
		canonical: "/catalogo",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Catálogo de productos de imprenta",
		url: absoluteUrl("/catalogo"),
		description:
			"Catálogo de productos de imprenta: papelería corporativa, folletos y revistas, carteles, packaging, expositores, roll up, calendarios y regalo promocional.",
		images: [ogImage("/calendar-1.jpg", "Catálogo Dinaprint")],
	},
	twitter: {
		title: "Catálogo de productos de imprenta",
		images: [ogImageUrl("/calendar-1.jpg")],
	},
	keywords: [
		"catálogo imprenta",
		"productos de imprenta",
		"imprenta madrid",
		"impresión digital",
		"impresión offset",
	],
};

export default async function Page() {
	return (
		<main>
			<Catalog />
		</main>
	);
}
