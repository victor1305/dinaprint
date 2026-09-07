import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Regalo promocional para empresas en Madrid",
	description:
		"Regalo promocional personalizado en Madrid (Pinto): soluciones para promociones, puntos de venta y acciones comerciales desde tiradas cortas.",
	alternates: {
		canonical: "/catalogo/regalo-promocional",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Regalo promocional para empresas en Madrid",
		url: absoluteUrl("/catalogo/regalo-promocional"),
		description: "Merchandising y regalos promocionales personalizados para empresas y eventos.",
		images: [ogImage("/regalo-promocional-01.jpg", "Regalo promocional - Dinaprint")],
	},
	twitter: {
		title: "Regalo promocional para empresas en Madrid",
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

const contentSections: ProductSection[] = [
	{
		title: "Elegir el regalo por uso, no por precio unitario",
		body: [
			"El criterio que mejor funciona no es cuánto cuesta la unidad, sino cuántas veces va a tener el cliente el objeto en la mano. Un bolígrafo de 0,40 € que se usa a diario rinde más que una carpeta de 4 € que se guarda en un cajón.",
			"Para eso conviene pensar en el contexto de quien lo recibe. En oficina funcionan libretas, botellas reutilizables y soportes de móvil. En obra e industria, cintas métricas, linternas y ropa de trabajo. En hostelería y comercio, delantales, bolsas y textil de marca. Y en ferias, algo ligero que quepa en una bolsa y no obligue al visitante a cargar peso toda la mañana.",
		],
	},
	{
		title: "La técnica de marcaje condiciona el diseño",
		body: [
			"El mismo logotipo no se puede aplicar igual sobre una taza, una camiseta y un power bank. Antes de encargar conviene saber qué admite cada técnica:",
		],
		list: [
			"<strong>Serigrafía:</strong> colores planos y muy sólidos, ideal en textil y bolsas. No reproduce degradados; cada color es una pasada y encarece.",
			"<strong>Tampografía:</strong> la habitual en bolígrafos y objetos pequeños o curvos. Área de marcaje limitada.",
			"<strong>Grabado láser:</strong> sin tinta, permanente y muy elegante en metal, bambú y corcho. Sale del color del material, así que no hay color corporativo.",
			"<strong>Bordado:</strong> el más duradero en textil y el que mejor imagen da en ropa corporativa. Los detalles muy finos y el texto pequeño se pierden.",
			"<strong>Transfer digital y DTF:</strong> admiten fotografía y degradados en textil, con menos tirada mínima que la serigrafía.",
			"<strong>Doming:</strong> resina transparente en relieve. Muy vistoso en placas y llaveros.",
		],
	},
	{
		title: "Plazos: la campaña de Navidad se cierra en octubre",
		body: [
			"Buena parte del regalo promocional se fabrica fuera y el marcaje se hace aquí, así que el plazo real va de 7 a 15 días laborables en condiciones normales. En campaña de Navidad ese plazo se dispara y el stock de los artículos más pedidos se agota.",
			"Para regalo de Navidad, lo prudente es cerrar artículo y arte final en octubre. Si vas con el tiempo justo, dínoslo y te proponemos referencias con stock nacional y marcaje rápido en vez de que te quedes sin nada.",
			"Necesitamos el logotipo en vectorial (AI, EPS o PDF) con los Pantone definidos. Un logotipo en JPG no sirve para serigrafía ni para láser, y rehacerlo cuesta tiempo que en campaña no hay.",
		],
	},
];

const serviceSchema = buildServiceSchema({
	name: "Regalo promocional para empresas en Madrid",
	description: "Merchandising y regalos promocionales personalizados para empresas y eventos.",
	slug: "/catalogo/regalo-promocional",
	imagePath: "/regalo-promocional-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Regalo promocional",
		h1: "Regalo promocional y merchandising para empresas en Madrid",
		product: "Regalo promocional",
		localProduct: "regalo promocional",
		sections: contentSections,
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
			{/* Schema del servicio */}
			<JsonLd data={serviceSchema} />

			<Product {...data} />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
