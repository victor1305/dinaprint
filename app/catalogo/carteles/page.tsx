import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Impresión de carteles en Madrid",
	description:
		"Impresión de carteles en Madrid (Pinto): distintos soportes (papel y rígidos), medidas y cantidades, con acabados como UVI, barnices y troquelado.",
	alternates: {
		canonical: "/catalogo/carteles",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Impresión de carteles en Madrid",
		url: absoluteUrl("/catalogo/carteles"),
		description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
		images: [ogImage("/carteles-01.jpg", "Impresión de carteles - Dinaprint")],
	},
	twitter: {
		title: "Impresión de carteles en Madrid",
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

const contentSections: ProductSection[] = [
	{
		title: "Papel o rígido: cómo elegir el soporte",
		body: [
			"La primera decisión de un cartel no es el tamaño, es dónde va a vivir y cuánto tiempo. De ahí sale el material, y el material es lo que marca el precio.",
			"Para escaparate o pared interior con vida corta —una promoción de dos semanas, un evento— el estucado de 200 a 250 g cumple de sobra y es la opción más económica. Si el cartel va colgado y tiene que quedar plano sin ondularse, conviene subir a 300 g o montarlo sobre foam de 5 mm.",
			"En exterior el papel no aguanta. Ahí van PVC de 3 mm, Dibond para instalaciones permanentes o lona de 510 g si hay que tensarla en una valla. La diferencia real entre un cartel de exterior que dura tres meses y uno que dura tres años está en el laminado, no en la tinta.",
		],
	},
	{
		title: "El tamaño se decide por la distancia de lectura",
		body: [
			"Una regla que evita bastantes carteles inútiles: la altura de letra en centímetros debe ser aproximadamente la distancia de lectura en metros. Un texto que se lee a 5 metros necesita 5 cm de altura de letra; a 20 metros, 20 cm.",
			"Aplicado a los formatos habituales: un A3 funciona en mostrador y ascensor, un A2 en escaparate a pie de calle, un A1 y un 70×100 en pared de local o valla interior, y de ahí hacia arriba ya hablamos de gran formato.",
			"El otro error clásico es meter demasiado texto. Un cartel se lee en dos segundos desde la acera: un titular, un dato y una llamada. Todo lo demás sobra y resta legibilidad.",
		],
	},
	{
		title: "Acabados que cambian el resultado",
		body: ["No todos los acabados aportan lo mismo según dónde vaya el cartel:"],
		list: [
			"<strong>Plastificado mate:</strong> imprescindible en locales con focos o luz cenital. Elimina el brillo que impide leer desde ciertos ángulos.",
			"<strong>Plastificado brillo:</strong> satura el color y funciona bien en escaparate con luz natural, pero refleja.",
			"<strong>Barniz UVI selectivo:</strong> brillo solo sobre el logotipo o una imagen, con el resto mate. Es lo que da sensación de pieza cuidada.",
			"<strong>Troquelado a forma:</strong> el cartel deja de ser un rectángulo. Requiere troquel propio, que se amortiza a partir de cierta tirada.",
			"<strong>Ojales y refuerzo:</strong> obligatorio en lona que vaya tensada, o el viento la rompe por los puntos de sujeción.",
		],
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
		localProduct: "carteles",
		sections: contentSections,
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
			{/* Schema del servicio */}
			<JsonLd data={serviceSchema} />

			<Product {...data} />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
