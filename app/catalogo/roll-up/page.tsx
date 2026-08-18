import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { absoluteUrl, buildServiceSchema, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Roll up: impresión y montaje para ferias y eventos",
	description:
		"Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.",
	alternates: {
		canonical: "/catalogo/roll-up",
	},
	openGraph: {
		type: "website",
		title: "Roll up: impresión y montaje para ferias y eventos",
		url: absoluteUrl("/catalogo/roll-up"),
		description:
			"Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.",
		images: [
			{ url: absoluteUrl("/rollup-001.jpg"), width: 1200, height: 630, alt: "Roll up - Dinaprint" },
		],
	},
	twitter: {
		title: "Roll up: impresión y montaje para ferias y eventos",
		images: [absoluteUrl("/rollup-001.jpg")],
	},
	keywords: [
		"roll up madrid",
		"imprimir roll up",
		"roll up ferias",
		"imprenta pinto",
		"impresión gran formato",
	],
};

const specRows = [
	{
		label: "Medidas estándar",
		value: "85×200 cm, 100×200 cm, 120×200 cm y 150×200 cm. También medidas especiales.",
	},
	{
		label: "Estructura",
		value:
			"Aluminio anodizado con mecanismo enrollable, barra de tres tramos y bolsa de transporte.",
	},
	{
		label: "Material gráfico",
		value:
			"Polipropileno de 200 micras opaco y antienrollamiento, o lona bloqueo para retroiluminación.",
	},
	{
		label: "Acabados",
		value:
			"Laminado mate antirreflectante recomendado para stands con focos, y laminado protector para uso intensivo.",
	},
	{
		label: "Área visible",
		value:
			"Los primeros 15 cm inferiores quedan ocultos por el mecanismo: no coloques ahí información.",
	},
	{
		label: "Zona de lectura",
		value:
			"El contenido importante debe ir entre 120 y 180 cm de altura, a la vista del visitante de pie.",
	},
	{
		label: "Resolución",
		value:
			"150 ppp a tamaño real es suficiente. Textos siempre vectoriales para que el borde quede limpio.",
	},
	{
		label: "Tirada mínima",
		value: "1 unidad, sin coste de preparación.",
	},
	{
		label: "Plazo de entrega",
		value: "48-72 h. Consultar para entregas urgentes antes de feria.",
	},
];

const faqItems = [
	{
		question: "¿Qué medidas de roll up tenéis disponibles?",
		answer:
			"Las medidas más habituales son 85×200 cm, 100×200 cm, 120×200 cm y 150×200 cm. También fabricamos tamaños especiales bajo pedido.",
	},
	{
		question: "¿El roll up incluye estructura?",
		answer:
			"Sí, todos nuestros roll ups incluyen el mecanismo enrollable de aluminio, la gráfica impresa a todo color y la bolsa de transporte. Listos para usar.",
	},
	{
		question: "¿Cuánto dura la gráfica de un roll up?",
		answer:
			"La impresión mantiene su calidad durante años si se guarda correctamente. Para uso intensivo en exterior, recomendamos laminado protector.",
	},
	{
		question: "¿Puedo cambiar la gráfica de mi roll up?",
		answer:
			"Sí, si conservas la estructura en buen estado, podemos imprimir una nueva gráfica a medida para reutilizar el mecanismo.",
	},
	{
		question: "¿Dónde debo colocar el texto en el diseño?",
		answer:
			"Entre 120 y 180 cm de altura, que es la zona de lectura cómoda de una persona de pie. Los primeros 15 cm quedan ocultos por el mecanismo: no pongas nada ahí.",
	},
	{
		question: "¿Qué diferencia hay entre un roll up económico y uno profesional?",
		answer:
			"El mecanismo. Uno profesional lleva base de aluminio con más peso, barra de tres tramos y tensión regulable, lo que evita que la gráfica se ondule y aguanta muchos más montajes.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Roll up",
	description:
		"Roll ups enrollables con gráfica a todo color, ideales para ferias, eventos y puntos de venta.",
	slug: "/catalogo/roll-up",
	imagePath: "/rollup-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Roll up",
		h1: "Impresión de roll ups para ferias y eventos",
		product: "Roll up",
		subtitle: "Soluciones y servicios gráficos",
		image: "/rollup-001.jpg",
		specs: specRows,
		specsCaption:
			"Medidas y materiales de producción habitual. Todos los roll ups incluyen estructura, gráfica y bolsa de transporte.",
		text: [
			"Los roll ups son soportes publicitarios ligeros y fáciles de transportar. Se despliegan en segundos y ofrecen una imagen profesional en cualquier evento, feria o punto de venta.",
			"Imprimimos a todo color con acabado de alta calidad. La estructura de aluminio es resistente y elegante, e incluye bolsa de transporte.",
			"Disponibles en varios tamaños estándar y personalizado. Son ideales para promocionar productos, servicios o lanzamientos.",
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
