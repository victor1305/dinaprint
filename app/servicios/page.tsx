import { Services } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { FAQ, JsonLd } from "@/components/atoms";
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

/** Preguntas sobre el proceso de producción; el schema `FAQPage` lo emite `FAQ`. */
const faqItems = [
	{
		question: "¿Me conviene más impresión offset o digital?",
		answer:
			"Depende sobre todo de la tirada. El digital sale a cuenta en cantidades cortas y permite personalizar ejemplar a ejemplar; el offset compensa en volúmenes altos y da la máxima consistencia de color. Si dudas, dinos la cantidad y el producto y te decimos cuál sale mejor.",
	},
	{
		question: "¿Qué hacéis exactamente en preimpresión?",
		answer:
			"Comprobamos que los archivos son óptimos para imprimir: resolución, modo de color, sangres, tipografías y troqueles. Si encontramos cualquier anomalía te la comunicamos antes de tirar y buscamos la solución, en lugar de imprimir un trabajo que sabemos que va a salir mal.",
	},
	{
		question: "¿Qué acabados y manipulados ofrecéis?",
		answer:
			"Plastificados, troquelados, encuadernaciones, mailing y personalizaciones, entre otros. Los hacemos como parte del mismo trabajo, así que el plazo y el control de calidad no dependen de terceros.",
	},
	{
		question: "No tengo el diseño hecho, ¿podéis crearlo?",
		answer:
			"Sí. Contamos con departamento de diseño a precios asequibles. Y si solo necesitas orientación, el asesoramiento sobre papeles, acabados y formatos es gratuito: podemos enseñarte muestras antes de que decidas.",
	},
	{
		question: "¿Con qué máquina imprimís en digital?",
		answer:
			"Con una Fujifilm Jet Press 7S, que alcanza más del 90% de la gama Pantone. Es lo que nos permite mantener la calidad en tiradas cortas, sin bajar el listón respecto al offset.",
	},
	{
		question: "¿Cómo funciona la distribución del pedido?",
		answer:
			"Enviamos a cualquier punto de la península sin coste adicional. Si necesitas una distribución amplia a varias direcciones, nos encargamos nosotros y te pasamos un informe con las cantidades y los envíos según tus instrucciones.",
	},
];

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<Services />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
