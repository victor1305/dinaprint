import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprimir folletos y revistas en Madrid",
	description:
		"Impresión de folletos y revistas en Madrid (Pinto): encuadernación (wire-o, hilo, cola PUR), plastificados y troquelados. Digital u offset según tirada.",
	alternates: {
		canonical: "/catalogo/folletos-y-revistas",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Imprimir folletos y revistas en Madrid",
		url: absoluteUrl("/catalogo/folletos-y-revistas"),
		description:
			"Impresión de folletos y revistas con encuadernación wire-o, hilo, cola PUR, plastificados y troquelados.",
		images: [ogImage("/Folletos-y-revistas-001.jpg", "Folletos y revistas - Dinaprint")],
	},
	twitter: {
		title: "Imprimir folletos y revistas en Madrid",
		images: [ogImageUrl("/Folletos-y-revistas-001.jpg")],
	},
	keywords: [
		"imprimir folletos madrid",
		"impresión revistas madrid",
		"encuadernación pur",
		"wire-o",
		"imprenta pinto",
	],
};

const specRows = [
	{
		label: "Formatos",
		value: "A4, A5, cuadrado 21×21 cm y 24×24 cm. Apaisados y formatos a medida bajo pedido.",
	},
	{
		label: "Número de páginas",
		value:
			"Desde 8. Con grapa, múltiplos de 4 hasta unas 64 páginas. Con cola PUR o cosido, sin límite práctico.",
	},
	{
		label: "Encuadernaciones",
		value: "Grapa a caballete, wire-o, espiral, fresado con cola PUR y cosido con hilo vegetal.",
	},
	{
		label: "Papeles de interior",
		value: "Estucado mate o brillo de 115 a 170 g. Offset ahuesado y reciclados certificados FSC.",
	},
	{
		label: "Papeles de cubierta",
		value: "Estucado de 250 a 350 g, con o sin plastificado, y cartulinas texturadas.",
	},
	{
		label: "Acabados",
		value:
			"Plastificado mate, brillo o soft-touch, barniz UVI selectivo, stamping, troquelado y golpe en seco.",
	},
	{
		label: "Tirada mínima",
		value: "25 unidades en digital. El offset compensa a partir de unas 500.",
	},
	{
		label: "Plazo de entrega",
		value: "48-72 h en digital. De 5 a 7 días laborables en offset con acabados especiales.",
	},
	{
		label: "Archivos",
		value:
			"PDF en CMYK, páginas sueltas y en orden, 3 mm de sangre y 300 ppp. Del pliego nos encargamos nosotros.",
	},
];

const faqItems = [
	{
		question: "¿Qué tipos de encuadernación ofrecéis?",
		answer:
			"Ofrecemos encuadernación grapada, wire-o (espiral metálica), cosido con hilo, fresado con cola PUR y encuadernación rústica. Cada tipo tiene sus ventajas según el uso y número de páginas.",
	},
	{
		question: "¿Cuál es el número mínimo de páginas para un folleto?",
		answer:
			"Un folleto grapado necesita mínimo 8 páginas (múltiplos de 4). Para encuadernaciones fresadas recomendamos a partir de 48 páginas para que el lomo quede bien definido.",
	},
	{
		question: "¿Puedo mezclar papeles en una misma revista?",
		answer:
			"Sí, es habitual usar un papel más grueso para la cubierta (250-300 g) y otro más ligero para el interior (90-150 g). También puedes incluir encartes en papel especial.",
	},
	{
		question: "¿Qué plazo de entrega tenéis para revistas?",
		answer:
			"Depende de la cantidad y el tipo de encuadernación. Para tiradas digitales pequeñas, podemos entregar en 3-5 días laborables. Trabajos offset o con acabados especiales suelen requerir 7-10 días.",
	},
	{
		question: "¿Cuántas páginas puede tener un folleto grapado?",
		answer:
			"Hasta unas 64 páginas, siempre en múltiplos de 4. Por encima de eso el lomo abulta y las hojas centrales sobresalen: ahí conviene pasar a cola PUR.",
	},
	{
		question: "¿Qué es el desplazamiento de páginas y por qué me afecta?",
		answer:
			"En un cuadernillo grapado, las hojas interiores sobresalen unos milímetros y se recortan al guillotinar. Lo compensamos en el montaje, pero conviene no acercar textos ni folios a menos de 8 mm del corte.",
	},
	{
		question: "¿Puedo imprimir una revista con periodicidad fija?",
		answer:
			"Sí, y en ese caso dejamos el trabajo preparado en máquina para que cada número salga más rápido y con el color consistente entre ediciones.",
	},
];

const contentSections: ProductSection[] = [
	{
		title: "La encuadernación se elige por número de páginas",
		body: [
			"No es una cuestión estética: cada sistema tiene un rango de páginas en el que funciona y fuera del cual da problemas.",
			"La <strong>grapa a caballete</strong> es la opción hasta unas 48 páginas y obliga a que el total sea múltiplo de 4, porque cada pliego son cuatro páginas. Por encima de ese grosor el cuadernillo empieza a abrirse solo y el corte queda escalonado.",
			"El <strong>fresado con cola PUR</strong> es lo indicado a partir de 48 páginas: da lomo plano, permite imprimir el título en el canto y aguanta bien la apertura. Por debajo de unas 32 páginas no hay lomo suficiente para encolar.",
			"El <strong>wire-o y la espiral</strong> tienen la ventaja de abrir en plano a 360°, que es lo que se necesita en manuales, recetarios y catálogos técnicos de consulta. A cambio, no hay lomo donde poner el título.",
			"El <strong>cosido con hilo</strong> es lo más duradero y lo que se usa en libros y memorias de aniversario, con el coste que corresponde.",
		],
	},
	{
		title: "Papel de interior y de cubierta",
		body: [
			"Un folleto bien producido casi nunca lleva el mismo papel dentro y fuera. El interior busca legibilidad y peso contenido; la cubierta, resistencia.",
			"En interior, el estucado mate de 115 a 150 g es la combinación más equilibrada para catálogo con fotografía: reproduce bien el color y no pesa tanto que dispare el franqueo. El brillo satura más el color pero refleja bajo luz directa y molesta al leer. Para textos largos, el offset ahuesado se lee mucho mejor y es lo que se usa en libro.",
			"En cubierta, de 250 a 350 g con plastificado mate. El plastificado no es solo estético: es lo que evita que las esquinas se rocen y que el color de la portada se marque con las huellas.",
			"Ojo con la transparencia. Por debajo de 115 g, un fondo oscuro se transparenta a la página siguiente. Si el catálogo tiene páginas con masas de color, hay que subir gramaje o elegir un papel con más opacidad.",
		],
	},
	{
		title: "Digital u offset: dónde está el punto de corte",
		body: [
			"Con tiradas cortas, el digital gana siempre: no hay coste de planchas ni de arranque de máquina, y podemos servir desde 25 ejemplares en 48 horas.",
			"A partir de unos 500 ejemplares el offset empieza a compensar, y de ahí hacia arriba la diferencia se dispara: en offset el coste por ejemplar cae con la tirada, mientras que en digital se mantiene casi plano.",
			"El offset da además mejor consistencia de color en tiradas largas y permite Pantone reales, papeles especiales y acabados que el digital no alcanza. Tenemos las dos tecnologías en el taller, así que al presupuestar te decimos cuál sale a cuenta para tu caso concreto en vez de empujarte hacia la que nos convenga.",
		],
	},
];

const serviceSchema = buildServiceSchema({
	name: "Folletos y revistas",
	description:
		"Impresión de folletos y revistas con encuadernación wire-o, hilo, cola PUR, plastificados y troquelados.",
	slug: "/catalogo/folletos-y-revistas",
	imagePath: "/Folletos-y-revistas-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Folletos y revistas",
		h1: "Impresión de folletos y revistas en Madrid",
		product: "Folletos y revistas",
		localProduct: "folletos y revistas",
		sections: contentSections,
		subtitle: "Soluciones y servicios gráficos",
		image: "/Folletos-y-revistas-001.jpg",
		specs: specRows,
		specsCaption:
			"Combinaciones de producción habitual. Si necesitas un formato o una encuadernación que no aparece, consúltanos.",
		text: [
			"Impresos a todo color en varios tipos de encuadernaciones: grapado, wire-o, hilo y cola PUR. Ofrecemos una amplia variedad de papeles en diferentes gramajes y acabados como plastificados de todo tipo y troquelados.",
			"Cada proyecto es diferente: desde un folleto informativo de 8 páginas hasta una revista corporativa de 100 páginas. Te asesoramos para elegir el formato, papel y encuadernación más adecuados.",
		],
		list: [
			"Impresión digital o en offset según tirada.",
			"Revistas promocionales para comercios y ayuntamientos.",
			"Folletos informativos y catálogos de producto.",
			"Revistas corporativas y memorias anuales.",
			"Folletos para ferias, exposiciones y eventos.",
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
