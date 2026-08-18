import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import {
	OG_DEFAULTS,
	absoluteUrl,
	buildServiceSchema,
	getLocalBusinessSchema,
	ogImage,
	ogImageUrl,
} from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cajas y packaging personalizados",
	description:
		"Cajas y packaging personalizados en Madrid (Pinto): impresión de calidad, acabados y tiradas cortas con impresión digital.",
	alternates: {
		canonical: "/catalogo/cajas-y-packaging",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Cajas y packaging personalizados",
		url: absoluteUrl("/catalogo/cajas-y-packaging"),
		description: "Packaging personalizado: cajas, estuches y envoltorios con acabados premium.",
		images: [ogImage("/packing-01.jpg", "Cajas y packaging - Dinaprint")],
	},
	twitter: {
		title: "Cajas y packaging personalizados",
		images: [ogImageUrl("/packing-01.jpg")],
	},
	keywords: [
		"packaging madrid",
		"cajas personalizadas",
		"imprimir cajas",
		"imprenta pinto",
		"acabados packaging",
	],
};

const specRows = [
	{
		label: "Tipos de caja",
		value:
			"Automontable, con tapa y fondo, tipo maletín, estuche de solapas y caja de envío e-commerce.",
	},
	{
		label: "Materiales",
		value: "Cartoncillo estucado de 300 a 450 g, microcanal de 1,5 mm y canal B de 3 mm.",
	},
	{
		label: "Impresión",
		value:
			"Offset sobre cartoncillo para tiradas grandes. Digital desde 50 unidades sin coste de plancha.",
	},
	{
		label: "Acabados",
		value:
			"Plastificado mate, brillo o soft-touch, barniz UVI selectivo, stamping y relieve en seco.",
	},
	{
		label: "Troquel",
		value:
			"A medida según producto. Si ya tienes el troquel de otra imprenta, podemos reutilizarlo.",
	},
	{
		label: "Interiores",
		value: "Cuna de cartón, separadores, fondo rígido y espuma para producto frágil.",
	},
	{
		label: "Sostenibilidad",
		value: "Cartón reciclado y certificado FSC, tintas de base vegetal y opciones sin plastificar.",
	},
	{
		label: "Tirada mínima",
		value: "50 unidades en digital. El troquel nuevo se amortiza a partir de unas 250.",
	},
	{
		label: "Plazo de entrega",
		value: "De 10 a 15 días laborables con troquel nuevo. De 5 a 7 reutilizando troquel.",
	},
];

const faqItems = [
	{
		question: "¿Puedo encargar pocas cajas personalizadas?",
		answer:
			"Sí, gracias a la impresión digital podemos producir tiradas cortas sin incremento de precio por cantidad. Ideal para lanzar nuevos productos o ediciones limitadas.",
	},
	{
		question: "¿Qué acabados ofrecéis en packaging?",
		answer:
			"Ofrecemos plastificado mate o brillo, barniz UVI, stamping en oro/plata, troquelado de formas especiales y relieves. Consulta con nuestro equipo para opciones premium.",
	},
	{
		question: "¿Puedo traer mi propio diseño?",
		answer:
			"Por supuesto. Aceptamos archivos en PDF, AI o PSD. También podemos diseñar el packaging si lo necesitas, adaptándolo a la imagen de tu marca.",
	},
	{
		question: "¿Cuánto tiempo tardáis en producir cajas?",
		answer:
			"El plazo estándar es de 5-7 días laborables tras aprobar la prueba. Para proyectos urgentes, pregunta por nuestro servicio express.",
	},
	{
		question: "¿Necesito un troquel nuevo para mi caja?",
		answer:
			"Solo si el formato no es estándar. Tenemos troqueles propios para las medidas más habituales. Si ya tienes uno de otra imprenta, podemos reutilizarlo si está en buen estado.",
	},
	{
		question: "¿Cuál es la diferencia entre cartoncillo y microcanal?",
		answer:
			"El cartoncillo (300-450 g) es liso y da mejor acabado de impresión: es lo típico en estuche de producto. El microcanal aporta rigidez y protección, y es lo indicado para envío y transporte.",
	},
	{
		question: "¿Tenéis opciones de packaging sostenible?",
		answer:
			"Sí: cartón reciclado y certificado FSC, tintas de base vegetal y acabados sin plastificar, que permiten que la caja se recicle en el contenedor de papel sin separar materiales.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Cajas y packaging personalizados",
	description: "Packaging personalizado: cajas, estuches y envoltorios con acabados premium.",
	slug: "/catalogo/cajas-y-packaging",
	imagePath: "/packing-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Cajas y packaging",
		h1: "Cajas y packaging personalizado en Madrid",
		product: "Cajas y packaging",
		subtitle: "Soluciones y servicios gráficos",
		image: "/packing-01.jpg",
		specs: specRows,
		specsCaption:
			"Materiales y acabados de producción habitual. El troquel se define a partir de las medidas reales de tu producto.",
		text: [
			"Un buen packaging debe identificar al producto de manera positiva e inducir a la compra, transmitiendo confianza y calidad. Además, el producto tiene que estar protegido y ser fácil de utilizar y apilar en el punto de venta.",
			"Con las nuevas técnicas de impresión digital podemos hacer cantidades mínimas con todo tipo de acabados: troquelado, barniz UVI, plastificados, stamping y más.",
			"Diseñamos y fabricamos cajas, estuches, bolsas y envoltorios adaptados a tu marca. Una buena presentación e impresión convence y fideliza al cliente.",
		],
	};
	return (
		<main>
			{/* Schema del negocio */}
			<JsonLd data={getLocalBusinessSchema()} />

			{/* Schema del servicio */}
			<JsonLd data={serviceSchema} />

			<Product {...data} />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
