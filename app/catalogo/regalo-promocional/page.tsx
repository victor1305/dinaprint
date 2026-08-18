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
	title: "Regalo promocional personalizado",
	description:
		"Regalo promocional personalizado en Madrid (Pinto): soluciones para promociones, puntos de venta y acciones comerciales desde tiradas cortas.",
	alternates: {
		canonical: "/catalogo/regalo-promocional",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Regalo promocional personalizado",
		url: absoluteUrl("/catalogo/regalo-promocional"),
		description: "Merchandising y regalos promocionales personalizados para empresas y eventos.",
		images: [ogImage("/regalo-promocional-01.jpg", "Regalo promocional - Dinaprint")],
	},
	twitter: {
		title: "Regalo promocional personalizado",
		images: [ogImageUrl("/regalo-promocional-01.jpg")],
	},
	keywords: [
		"regalo promocional",
		"merchandising personalizado",
		"promociones",
		"imprenta madrid",
		"imprenta pinto",
	],
};

const specRows = [
	{
		label: "Textil",
		value:
			"Camisetas, polos, sudaderas, gorras y bolsas de algodón. Serigrafía, DTF, DTG y bordado.",
	},
	{
		label: "Escritura y oficina",
		value: "Bolígrafos, libretas, blocs de notas, carpetas y sets de escritorio.",
	},
	{
		label: "Tecnología",
		value: "Memorias USB, power banks, altavoces y soportes de móvil, con láser o tampografía.",
	},
	{
		label: "Bebida",
		value: "Botellas reutilizables, termos y tazas, con grabado láser o impresión en circularidad.",
	},
	{
		label: "Ecológicos",
		value: "Bambú, corcho, algodón orgánico, plástico reciclado y semillas plantables.",
	},
	{
		label: "Técnicas de marcaje",
		value: "Serigrafía, tampografía, grabado láser, bordado, transfer digital y doming.",
	},
	{
		label: "Tirada mínima",
		value:
			"Depende del artículo: desde 25 unidades en textil y desde 100 en artículos de importación.",
	},
	{
		label: "Plazo de entrega",
		value: "De 7 a 15 días laborables. En campaña de Navidad conviene cerrar en octubre.",
	},
	{
		label: "Archivos",
		value: "Logotipo vectorial en AI, EPS o PDF, con los colores Pantone definidos.",
	},
];

const faqItems = [
	{
		question: "¿Qué tipo de regalos promocionales podéis personalizar?",
		answer:
			"Personalizamos bolígrafos, libretas, tazas, bolsas, USB, camisetas, paraguas, llaveros, power banks y muchísimo más. Trabajamos con catálogos de miles de productos.",
	},
	{
		question: "¿Cuál es la cantidad mínima de pedido?",
		answer:
			"Dependiendo del producto, podemos hacer tiradas desde 5 unidades. Te asesoramos sobre las opciones más económicas según la cantidad que necesites.",
	},
	{
		question: "¿Cómo se personaliza el regalo?",
		answer:
			"Según el producto: serigrafía, tampografía, grabado láser, bordado, impresión digital UV, sublimación, etc. Elegimos la técnica que mejor reproduce tu logo.",
	},
	{
		question: "¿Hacéis kits o packs promocionales?",
		answer:
			"Sí, preparamos kits personalizados con varios productos, cajas de regalo y embalaje a medida para eventos, bienvenidas de empleados o campañas especiales.",
	},
	{
		question: "¿Cuál es el pedido mínimo en regalo promocional?",
		answer:
			"Depende del artículo. En textil y artículos de stock nacional arrancamos en 25-50 unidades. En artículos de importación o con personalización especial, a partir de 100.",
	},
	{
		question: "¿Qué técnica de marcaje conviene para mi logotipo?",
		answer:
			"Con pocos colores planos y tiradas grandes, serigrafía o tampografía. Con logotipo a todo color o degradados, transfer digital o DTF. Sobre metal y bambú, grabado láser.",
	},
	{
		question: "¿Podéis enviar una muestra antes del pedido?",
		answer:
			"Sí. En pedidos de cierto volumen preparamos una muestra marcada con tu logotipo para que valides el color y la posición antes de producir el resto.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Regalo promocional personalizado",
	description: "Merchandising y regalos promocionales personalizados para empresas y eventos.",
	slug: "/catalogo/regalo-promocional",
	imagePath: "/regalo-promocional-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Regalo promocional",
		h1: "Regalo promocional y merchandising para empresas",
		product: "Regalo promocional",
		subtitle: "Soluciones y servicios gráficos",
		image: "/regalo-promocional-01.jpg",
		specs: specRows,
		specsCaption:
			"Familias de producto y técnicas de marcaje habituales. El mínimo y el plazo varían mucho según el artículo.",
		text: [
			"El regalo promocional es una excelente forma de crear empatía con el cliente. Un detalle bien elegido refuerza la imagen de marca y fideliza.",
			"Ofrecemos un amplio catálogo de productos: bolígrafos, libretas, textil, tecnología, bolsas ecológicas, artículos de oficina y mucho más.",
			"Ideal para puntos de venta, visitas comerciales, ferias, eventos corporativos o promociones. Desde 5 unidades en adelante.",
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
