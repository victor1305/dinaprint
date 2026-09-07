import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprimir flyers y desplegables en Madrid",
	description:
		"Impresión de flyers y desplegables en Madrid (Pinto): distintos tamaños, papeles y acabados para buzoneo, promociones y puntos de venta.",
	alternates: {
		canonical: "/catalogo/flyers-y-desplegables",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Imprimir flyers y desplegables en Madrid",
		url: absoluteUrl("/catalogo/flyers-y-desplegables"),
		description:
			"Impresión de flyers y desplegables en Madrid (Pinto): distintos tamaños, papeles y acabados para buzoneo, promociones y puntos de venta.",
		images: [ogImage("/flyer-001.jpg", "Flyers y desplegables - Dinaprint")],
	},
	twitter: {
		title: "Imprimir flyers y desplegables en Madrid",
		images: [ogImageUrl("/flyer-001.jpg")],
	},
	keywords: [
		"imprimir flyers madrid",
		"desplegables imprenta",
		"buzoneo",
		"imprenta pinto",
		"impresión digital madrid",
	],
};

const specRows = [
	{
		label: "Formatos de flyer",
		value: "A6 (105×148 mm), A5 (148×210 mm), A4 y 10×21 cm para expositor de mostrador.",
	},
	{
		label: "Desplegables",
		value:
			"Díptico, tríptico con plegado en carta o en acordeón, y cuatro cuerpos en ventana o en zigzag.",
	},
	{
		label: "Papeles",
		value: "Estucado mate o brillo de 135 a 350 g. Offset de 90 a 120 g para buzoneo masivo.",
	},
	{
		label: "Gramaje recomendado",
		value: "170 g para reparto en mano, 135 g para buzoneo y 300 g o más para punto de venta.",
	},
	{
		label: "Acabados",
		value:
			"Plastificado mate o brillo, barniz UVI selectivo, hendido para que el plegado no rompa la tinta.",
	},
	{
		label: "Hendido",
		value:
			"Obligatorio a partir de 170 g: sin él la fibra del papel se quiebra y la tinta salta en el pliegue.",
	},
	{
		label: "Tirada mínima",
		value: "100 unidades en digital, sin coste de preparación.",
	},
	{
		label: "Plazo de entrega",
		value: "48-72 h en digital. De 4 a 6 días laborables en offset con plegado.",
	},
	{
		label: "Archivos",
		value:
			"PDF en CMYK con 3 mm de sangre. En desplegables, marca las líneas de plegado en una capa aparte.",
	},
];

const faqItems = [
	{
		question: "¿Qué tamaños de flyers son los más habituales?",
		answer:
			"Los formatos más demandados son A5, A6, DL (10×21 cm) y A4. También hacemos tamaños personalizados según tus necesidades de diseño y distribución.",
	},
	{
		question: "¿Qué papel recomendáis para flyers?",
		answer:
			"Para flyers estándar recomendamos estucado brillo o mate de 135-170 g. Si buscas más resistencia o un tacto premium, puedes optar por 250-300 g con plastificado.",
	},
	{
		question: "¿Hacéis desplegables con varios pliegues?",
		answer:
			"Sí, fabricamos dípticos, trípticos, cuadrípticos y plegados especiales (ventana, acordeón, envolvente). Te asesoramos sobre el plegado más adecuado para tu contenido.",
	},
	{
		question: "¿Puedo encargar pocas unidades?",
		answer:
			"Sí, con impresión digital no hay cantidad mínima. Puedes pedir desde 50 o 100 unidades para probar una campaña antes de hacer tiradas mayores.",
	},
	{
		question: "¿Qué gramaje elijo para buzoneo?",
		answer:
			"135 g es el equilibrio habitual entre coste y percepción. Para reparto en mano sube a 170 g, que aguanta mejor el manoseo. En punto de venta, 300 g o más.",
	},
	{
		question: "¿Por qué se agrieta la tinta en el pliegue?",
		answer:
			"Porque falta el hendido. A partir de 170 g hay que marcar el pliegue con una hendedora antes de plegar; si se pliega en seco, la fibra se quiebra y la tinta salta, sobre todo en fondos oscuros.",
	},
	{
		question: "¿Qué tipos de plegado hacéis?",
		answer:
			"Díptico, tríptico en carta o en acordeón, cuatro cuerpos en ventana o en zigzag, y plegado cruzado para planos y mapas. Si tienes dudas, te preparamos una maqueta en blanco.",
	},
];

const contentSections: ProductSection[] = [
	{
		title: "El gramaje se elige por cómo se reparte",
		body: [
			"Es la decisión que más afecta al resultado y la que más se improvisa. Un flyer que se reparte en mano y otro que se buzonea no llevan el mismo papel.",
			"Para <strong>reparto en mano</strong>, 170 g es el punto justo: tiene cuerpo suficiente para que no se doble al cogerlo y no encarece la tirada. Por debajo de 135 g el flyer se percibe como propaganda y acaba en la papelera más cercana.",
			"Para <strong>buzoneo masivo</strong>, 135 g o incluso offset de 115 g, porque el volumen manda y el flyer no tiene que aguantar manipulación.",
			"Para <strong>punto de venta y expositor de mostrador</strong>, 300 g o más: el flyer tiene que sostenerse de pie en el porta-folletos sin vencerse.",
		],
	},
	{
		title: "Desplegables: el hendido es lo que evita que se rompa la tinta",
		body: [
			"Cualquier papel por encima de 170 g que se doble sin hendir previamente rompe la fibra y deja una grieta blanca justo en el pliegue, encima del color. Es el defecto más visible de un tríptico mal producido y no tiene arreglo una vez impreso.",
			"Nosotros hendemos siempre antes de plegar. A cambio, el arte final tiene que respetar los pliegues: en un tríptico con plegado en carta, la solapa que se mete dentro es entre 2 y 3 mm más estrecha que las otras dos caras. Si maquetas las tres caras iguales, el pliegue no cierra bien y el contenido queda descuadrado.",
			"Te pasamos la plantilla con las medidas exactas de cada cara según el tipo de plegado —carta, acordeón, ventana, díptico o cruzado— para que el diseño encaje a la primera.",
		],
	},
	{
		title: "Preparar el archivo",
		body: [
			"Un flyer es de los trabajos más sencillos de imprimir y de los que más veces vuelven de preimpresión por lo mismo:",
		],
		list: [
			"PDF en <strong>CMYK</strong>, con 3 mm de sangre por cada lado y marcas de corte.",
			"Imágenes a <strong>300 ppp</strong> a tamaño real. Lo que se ve bien en pantalla a 72 ppp sale pixelado en papel.",
			"Textos a <strong>4 mm del corte</strong> como mínimo, por la tolerancia de la guillotina.",
			"Negros de fondo en <strong>negro rico</strong> (60/40/40/100), no al 100 % de negro plano.",
			"Tipografías <strong>trazadas o incrustadas</strong>, para que no se sustituyan por otra al abrir el archivo.",
		],
	},
];

const serviceSchema = buildServiceSchema({
	name: "Flyers y desplegables",
	description: "Impresión de flyers y desplegables para buzoneo, promociones y puntos de venta.",
	slug: "/catalogo/flyers-y-desplegables",
	imagePath: "/flyer-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Flyers y desplegables",
		h1: "Impresión de flyers y desplegables en Madrid",
		product: "Flyers y desplegables",
		localProduct: "flyers y desplegables",
		sections: contentSections,
		subtitle: "Soluciones y servicios gráficos",
		image: "/flyer-001.jpg",
		specs: specRows,
		specsCaption: "Formatos, gramajes y plegados de producción habitual.",
		text: [
			"Los flyers y desplegables son una herramienta de marketing directa y económica. Se utilizan para comunicar las principales características de un producto, servicio o evento.",
			"Dependiendo del mensaje, puedes elegir entre distintos tamaños, número de caras, tipos de papel y acabados. Desde un flyer sencillo a un desplegable con múltiples pliegues y acabados especiales.",
			"Una de sus grandes ventajas es la versatilidad: sirven para buzoneo, reparto en mano, promociones en punto de venta o como complemento en mailings.",
		],
		list: [
			"Publicidad a domicilio mediante buzoneo responsable.",
			"Entrega en mano en zonas de alto tráfico.",
			"Promociones en puntos de venta y eventos.",
			"Dípticos, trípticos y plegados especiales.",
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
