import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expositores de cartón y PLV en Madrid",
	description:
		"Expositores para punto de venta en Madrid (Pinto): soluciones para retail con medidas y acabados personalizados.",
	alternates: {
		canonical: "/catalogo/expositores",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Expositores de cartón y PLV en Madrid",
		url: absoluteUrl("/catalogo/expositores"),
		description:
			"Expositores personalizados para retail, ferias y puntos de venta. Múltiples materiales y acabados.",
		images: [ogImage("/stand-001.jpg", "Expositores - Dinaprint")],
	},
	twitter: {
		title: "Expositores de cartón y PLV en Madrid",
		images: [ogImageUrl("/stand-001.jpg")],
	},
	keywords: [
		"expositores punto de venta",
		"expositores madrid",
		"PLV",
		"imprenta pinto",
		"acabados personalizados",
	],
};

const specRows = [
	{
		label: "Tipos",
		value: "Expositor de suelo, de sobremesa, encajado en palé, tótem y cabecera de góndola.",
	},
	{
		label: "Materiales",
		value: "Cartón microcanal de 1,5 mm, canal B de 3 mm y doble canal para carga pesada.",
	},
	{
		label: "Altura habitual",
		value: "De 140 a 180 cm en expositor de suelo. De 25 a 50 cm en sobremesa.",
	},
	{
		label: "Carga soportada",
		value: "De 3 a 5 kg por balda en canal B. Hasta 15 kg con refuerzo de doble canal.",
	},
	{
		label: "Montaje",
		value:
			"Plegado y montaje sin herramientas. Se sirve en plano para ahorrar transporte y almacenaje.",
	},
	{
		label: "Acabados",
		value: "Impresión offset laminada sobre cartón, plastificado mate o brillo y barniz UVI.",
	},
	{
		label: "Prototipo",
		value:
			"Recomendable antes de la tirada: fabricamos una maqueta real para validar medidas y carga.",
	},
	{
		label: "Tirada mínima",
		value: "25 unidades. El troquel se amortiza a partir de unas 100.",
	},
	{
		label: "Plazo de entrega",
		value: "De 10 a 15 días laborables, incluyendo troquel y prototipo previo.",
	},
];

const faqItems = [
	{
		question: "¿Qué tipos de expositores fabricáis?",
		answer:
			"Fabricamos expositores de suelo, de mostrador, con baldas, giratorios, troquelados y personalizados según las necesidades del punto de venta.",
	},
	{
		question: "¿En qué materiales se pueden hacer?",
		answer:
			"Trabajamos con cartón, cartón pluma, PVC, metacrilato, madera y estructuras metálicas. El material depende del peso del producto y la durabilidad requerida.",
	},
	{
		question: "¿Diseñáis el expositor a medida?",
		answer:
			"Sí, podemos diseñar desde cero o adaptar un modelo existente a tus productos. Te enviamos maqueta digital y prototipo para aprobación.",
	},
	{
		question: "¿Cuál es la cantidad mínima de pedido?",
		answer:
			"Podemos fabricar desde una unidad para prototipos. Para tiradas mayores ofrecemos mejores precios unitarios.",
	},
	{
		question: "¿Cuánto peso aguanta un expositor de cartón?",
		answer:
			"Entre 3 y 5 kg por balda en canal B, que cubre la mayoría de productos. Con refuerzo de doble canal llegamos a unos 15 kg. Dinos qué vas a exponer y dimensionamos la estructura.",
	},
	{
		question: "¿El expositor viene montado?",
		answer:
			"Se sirve en plano y se monta sin herramientas en un par de minutos. Así el transporte y el almacenaje cuestan mucho menos que enviándolo montado.",
	},
	{
		question: "¿Podéis hacer un prototipo antes de la tirada?",
		answer:
			"Sí, y lo recomendamos siempre en expositores nuevos. Fabricamos una maqueta real para comprobar medidas, estabilidad y encaje del producto antes de lanzar la producción.",
	},
];

const contentSections: ProductSection[] = [
	{
		title: "Elegir el tipo de expositor según dónde se coloca",
		body: [
			"Un expositor de cartón funciona o no según el sitio que le dé la tienda, y ese sitio hay que negociarlo antes de fabricar. Fabricar un expositor de suelo para una cadena que solo cede espacio en mostrador es dinero perdido.",
			"El de <strong>mostrador</strong> es el de menor coste y el que más fácil se coloca: producto pequeño, compra por impulso, junto a la caja. El de <strong>suelo</strong> necesita metro y medio de pasillo y se reserva para lanzamientos y campañas con acuerdo previo. La <strong>cabecera de góndola</strong> es la posición más cara del lineal y suele ir asociada a un acuerdo comercial. El <strong>expositor encajado en palé</strong> es el que mejor funciona en superficies grandes, porque llega montado y el personal de tienda no tiene que hacer nada.",
		],
	},
	{
		title: "La carga manda sobre el material",
		body: [
			"Antes de diseñar hay que saber cuánto pesa el producto y cuántas unidades van por balda. El cartón microcanal aguanta bien producto ligero —cosmética, sobres, bolsas— pero se vence con conservas o botellas.",
			"Con peso real hay que ir a canal B de 3 mm, y por encima de unos 5 kg por balda, a doble canal con refuerzo interior. Es la diferencia entre un expositor que aguanta la campaña entera y uno que se hunde la primera semana y acaba retirado por la propia tienda.",
			"Siempre fabricamos un prototipo troquelado antes de la tirada y lo cargamos con el producto real. Es el paso que más disgustos evita, porque los problemas de estabilidad no se ven en un render.",
		],
	},
	{
		title: "Montaje y transporte",
		body: [
			"Un expositor se envía plegado y se monta en tienda. Si el montaje requiere más de un minuto o instrucciones complicadas, el personal de la tienda no lo monta y se queda en el almacén.",
			"Diseñamos con pestañas de encaje y sin necesidad de cinta ni herramientas, y numeramos las piezas cuando el montaje tiene varios pasos. También podemos servirlo premontado si la campaña lo justifica y el transporte lo permite.",
		],
	},
];

const serviceSchema = buildServiceSchema({
	name: "Expositores de cartón y PLV en Madrid",
	description:
		"Expositores personalizados para retail, ferias y puntos de venta. Múltiples materiales y acabados.",
	slug: "/catalogo/expositores",
	imagePath: "/stand-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Expositores",
		h1: "Expositores de cartón y PLV en Madrid",
		product: "Expositores",
		localProduct: "expositores",
		sections: contentSections,
		subtitle: "Soluciones y servicios gráficos",
		image: "/stand-001.jpg",
		specs: specRows,
		specsCaption:
			"Configuraciones habituales. La estructura se dimensiona según el peso y el tamaño del producto que vayas a exponer.",
		text: [
			"Los expositores aprovechan al máximo el punto de venta: el producto sale al encuentro del cliente y capta su atención de forma directa.",
			"Se utilizan en centros comerciales, supermercados, farmacias y tiendas especializadas. Se convierten en un punto de venta cercano al comprador.",
			"Fabricamos expositores en distintos materiales y admiten acabados y medidas de todo tipo, adaptándose a la imagen de tu marca.",
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
