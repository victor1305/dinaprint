import { Catalog } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { JsonLd } from "@/components/atoms";
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

/** Preguntas de elección de producto; el schema `FAQPage` lo emite `FAQ`. */
const faqItems = [
	{
		question: "¿Puedo encargar un producto que no aparece en el catálogo?",
		answer:
			"Sí. El catálogo recoge lo más habitual, pero producimos también formatos y manipulados a medida. Cuéntanos qué necesitas y te decimos si es viable y en qué plazo.",
	},
	{
		question: "¿Por qué no aparecen los precios?",
		answer:
			"Porque el precio de un impreso depende del formato, el papel, la tirada, el número de tintas y los acabados: la misma pieza puede variar mucho según cómo se produzca. Presupuestamos cada trabajo con esos datos para que el precio sea el real, no una horquilla.",
	},
	{
		question: "¿Podéis enviarme muestras antes de decidir?",
		answer:
			"Sí. Podemos enseñarte muestras de papeles y acabados, y hacer pruebas de color en los trabajos que lo requieran. El asesoramiento previo no tiene coste.",
	},
	{
		question: "¿Qué productos funcionan mejor en una feria o un evento?",
		answer:
			"Lo más habitual es combinar roll ups para el fondo del estand, expositores de cartón para el punto de venta, folletos o catálogos para entregar y regalo promocional como recuerdo de marca. Cada uno tiene su página dentro del catálogo.",
	},
	{
		question: "¿Podéis imprimir el mismo diseño en varios productos?",
		answer:
			"Sí, y es lo recomendable para mantener la coherencia de marca. Al producirlo todo en la misma casa, el color se mantiene consistente entre la papelería, los folletos y el packaging.",
	},
];

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<Catalog faqItems={faqItems} />
		</main>
	);
}
