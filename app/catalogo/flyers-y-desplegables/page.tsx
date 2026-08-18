import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { absoluteUrl, buildServiceSchema, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Impresión de flyers y desplegables",
	description:
		"Impresión de flyers y desplegables en Madrid (Pinto): distintos tamaños, papeles y acabados para buzoneo, promociones y puntos de venta.",
	alternates: {
		canonical: "/catalogo/flyers-y-desplegables",
	},
	openGraph: {
		type: "website",
		title: "Impresión de flyers y desplegables",
		url: absoluteUrl("/catalogo/flyers-y-desplegables"),
		description:
			"Impresión de flyers y desplegables en Madrid (Pinto): distintos tamaños, papeles y acabados para buzoneo, promociones y puntos de venta.",
		images: [
			{
				url: absoluteUrl("/flyer-001.jpg"),
				width: 1200,
				height: 630,
				alt: "Flyers y desplegables - Dinaprint",
			},
		],
	},
	twitter: {
		title: "Impresión de flyers y desplegables",
		images: [absoluteUrl("/flyer-001.jpg")],
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
