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

import { FAQ, JsonLd } from "@/components/atoms";
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

/**
 * Preguntas generales del negocio. El componente `FAQ` emite el schema
 * `FAQPage`, así que este bloque es también la fuente del Q&A estructurado
 * de la home: no duplicar las preguntas de las páginas de zona ni de catálogo.
 */
const faqItems = [
	{
		question: "¿Qué tipo de trabajos imprimís?",
		answer:
			"Papelería corporativa, folletos y revistas, catálogos, flyers, cartas y menús, carteles, calendarios, cajas y packaging, roll ups, expositores y regalo promocional. Trabajamos tanto en impresión digital como en offset, con acabados y manipulados propios.",
	},
	{
		question: "¿Hay una cantidad mínima de pedido?",
		answer:
			"No para la mayoría de productos. Con impresión digital podemos producir desde una sola unidad; a partir de cierta tirada compensa pasar a offset, y te lo indicamos al presupuestar.",
	},
	{
		question: "¿Cuánto tarda un pedido?",
		answer:
			"Depende del producto, la tirada y los acabados. Los trabajos digitales sencillos suelen salir en 24-48 horas y los de offset entre 5 y 7 días laborables. El plazo exacto va siempre confirmado en el presupuesto.",
	},
	{
		question: "¿Cómo pido un presupuesto?",
		answer:
			"Por el formulario de la página de contacto, por teléfono en el 678 519 403 / 678 519 404 o escribiendo a dinaprint@dinaprint.com. Los precios no se publican en la web porque dependen del formato, el papel, la tirada y los acabados.",
	},
	{
		question: "¿En qué formato tengo que enviar los archivos?",
		answer:
			"Lo habitual es un PDF en alta resolución, en CMYK y con sangre y marcas de corte. Aun así, revisamos todos los archivos en preimpresión y te avisamos si detectamos algo antes de tirar.",
	},
	{
		question: "¿Hacéis envíos fuera de Madrid?",
		answer:
			"Sí. Enviamos a toda la península sin coste adicional. Para Baleares, Canarias o fuera de España, consúltanos y te damos opciones.",
	},
];

export default async function Page() {
	return (
		<main>
			<JsonLd data={getOrganizationSchema()} />
			<JsonLd data={getWebSiteSchema()} />
			<JsonLd data={getLocalBusinessSchema()} />
			<Main />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
