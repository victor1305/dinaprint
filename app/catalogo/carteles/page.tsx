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
	title: "Impresión de carteles",
	description:
		"Impresión de carteles en Madrid (Pinto): distintos soportes (papel y rígidos), medidas y cantidades, con acabados como UVI, barnices y troquelado.",
	alternates: {
		canonical: "/catalogo/carteles",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Impresión de carteles",
		url: absoluteUrl("/catalogo/carteles"),
		description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
		images: [ogImage("/carteles-01.jpg", "Impresión de carteles - Dinaprint")],
	},
	twitter: {
		title: "Impresión de carteles",
		description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
		images: [ogImageUrl("/carteles-01.jpg")],
	},
	keywords: [
		"imprimir carteles madrid",
		"cartelería",
		"imprenta pinto",
		"acabado uvi",
		"troquelado",
	],
};

const specRows = [
	{
		label: "Formatos en papel",
		value: "A3, A2, A1, A0 y 70×100 cm. Otros tamaños a medida sin coste de troquel.",
	},
	{
		label: "Papeles",
		value: "Estucado de 135 a 250 g para interior. Papel fotográfico y blueback para mupi y valla.",
	},
	{
		label: "Soportes rígidos",
		value: "Cartón pluma de 5 y 10 mm, PVC espumado de 3 a 10 mm, Dibond y metacrilato.",
	},
	{
		label: "Lonas",
		value:
			"Frontlit de 440 a 510 g con ojales y refuerzo perimetral. Mesh microperforada para viento.",
	},
	{
		label: "Acabados",
		value:
			"Plastificado antirreflectante, laminado UV para exterior, corte a forma y ojales metálicos.",
	},
	{
		label: "Resolución",
		value: "150 ppp a tamaño real en formatos grandes. 300 ppp en A3 y A2 de visión cercana.",
	},
	{
		label: "Tirada mínima",
		value: "1 unidad. La impresión de gran formato no requiere tirada mínima.",
	},
	{
		label: "Plazo de entrega",
		value: "24-48 h en papel y soportes rígidos estándar. 3-5 días con corte a forma.",
	},
	{
		label: "Archivos",
		value: "PDF en CMYK con 10 mm de sangre en gran formato y textos convertidos a curvas.",
	},
];

const faqItems = [
	{
		question: "¿En qué materiales podéis imprimir carteles?",
		answer:
			"Imprimimos en papel estucado, cartulina, foam, PVC, metacrilato, Dibond, cartón pluma y lonas. Cada material tiene sus ventajas según el uso: interior, exterior, durabilidad, peso, etc.",
	},
	{
		question: "¿Qué tamaños de carteles ofrecéis?",
		answer:
			"Trabajamos desde A5 hasta formatos especiales de varios metros. Los más habituales son A3, A2, A1, A0 y 70×100 cm, pero podemos adaptarnos a cualquier medida.",
	},
	{
		question: "¿Los carteles son resistentes a la intemperie?",
		answer:
			"Depende del material. Para exterior recomendamos lonas, PVC o soportes rígidos con laminado protector. Te asesoramos sobre la mejor opción según dónde vayas a colocar el cartel.",
	},
	{
		question: "¿Ofrecéis servicio de instalación?",
		answer:
			"Sí, contamos con servicio de instalación de cartelería en Madrid. Consúltanos disponibilidad y presupuesto para tu ubicación.",
	},
	{
		question: "¿Qué material aguanta en el exterior?",
		answer:
			"Para exterior recomendamos lona frontlit con ojales, PVC espumado o vinilo con laminado UV. El papel estucado sin protección se deteriora con la primera lluvia.",
	},
	{
		question: "¿A qué resolución tengo que preparar un cartel grande?",
		answer:
			"En formatos de A1 en adelante, 150 ppp a tamaño real es suficiente porque se ven a distancia. En A3 y A2, que se leen de cerca, sube a 300 ppp.",
	},
	{
		question: "¿Podéis cortar el cartel con una forma concreta?",
		answer:
			"Sí, hacemos corte a forma en soportes rígidos y en vinilo. Envíanos el contorno en una capa vectorial aparte, marcada como línea de corte.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Carteles",
	description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
	slug: "/catalogo/carteles",
	imagePath: "/carteles-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Carteles",
		h1: "Impresión de carteles y cartelería en Madrid",
		product: "Carteles",
		subtitle: "Soluciones y servicios gráficos",
		image: "/carteles-01.jpg",
		specs: specRows,
		specsCaption:
			"Materiales y formatos de producción habitual, tanto para interior como para exterior.",
		text: [
			"Los carteles difunden información, anuncian eventos o promocionan productos. Su éxito depende del diseño y de la calidad de impresión. Podemos enriquecer cualquier cartel con acabados como troquelados, barnices UVI, laminados y más.",
			"Imprimimos en diferentes soportes: desde papel fotográfico hasta materiales rígidos como foam, PVC o Dibond. Cualquier medida y cantidad, adaptándonos a tus necesidades.",
			"Si prefieres lonas para exterior, también las fabricamos. Y si necesitas instalación, contamos con servicio propio en Madrid.",
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
