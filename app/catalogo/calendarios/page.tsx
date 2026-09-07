import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Calendarios personalizados en Madrid",
	description:
		"Impresión de calendarios personalizados en Madrid (Pinto): de pared, mesa o bolsillo, en cualquier cantidad, medida y soporte.",
	alternates: {
		canonical: "/catalogo/calendarios",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Calendarios personalizados en Madrid",
		url: absoluteUrl("/catalogo/calendarios"),
		description:
			"Impresión de calendarios personalizados en Madrid (Pinto): de pared, mesa o bolsillo, en cualquier cantidad, medida y soporte.",
		images: [ogImage("/calendar-1.jpg", "Calendarios personalizados - Dinaprint")],
	},
	twitter: {
		title: "Calendarios personalizados en Madrid",
		description:
			"Impresión de calendarios personalizados en Madrid (Pinto): de pared, mesa o bolsillo, en cualquier cantidad, medida y soporte.",
		images: [ogImageUrl("/calendar-1.jpg")],
	},
	keywords: [
		"imprimir calendarios madrid",
		"calendarios personalizados",
		"imprenta pinto",
		"impresión digital",
		"impresión offset",
	],
};

const specRows = [
	{
		label: "Calendario de pared",
		value: "A3 y A4, de 7, 13 o 14 hojas, con wire-o y colgador troquelado.",
	},
	{
		label: "Calendario de sobremesa",
		value: "Formatos 21×15 cm y 15×21 cm, con caballete de cartón y wire-o superior.",
	},
	{
		label: "Faldillas y de bolsillo",
		value: "Faldilla con cabecera impresa y taco mensual. Bolsillo en 85×55 mm plastificado.",
	},
	{
		label: "Papeles",
		value:
			"Estucado mate o brillo de 150 a 250 g en interiores. Cartulina de 300 a 350 g en cabeceras y caballetes.",
	},
	{
		label: "Encuadernación",
		value: "Wire-o metálico en blanco, negro o plata. También grapa y espiral de plástico.",
	},
	{
		label: "Personalización",
		value:
			"Logotipo, datos de contacto, fotografías propias y marcado de fechas señaladas de tu sector.",
	},
	{
		label: "Tirada mínima",
		value: "25 unidades en digital, ideal para regalo de empresa personalizado.",
	},
	{
		label: "Plazo de entrega",
		value: "De 5 a 7 días laborables. En campaña de Navidad conviene cerrar el pedido en octubre.",
	},
	{
		label: "Archivos",
		value:
			"PDF en CMYK con 3 mm de sangre. Cuidado con los textos cerca de la perforación del wire-o.",
	},
];

const faqItems = [
	{
		question: "¿Qué tipos de calendarios podéis imprimir?",
		answer:
			"Imprimimos calendarios de pared (con espiral o grapados), de sobremesa, de bolsillo, marcapáginas y formatos especiales. Cualquier diseño es posible.",
	},
	{
		question: "¿Cuándo debo encargar mis calendarios?",
		answer:
			"Recomendamos encargar en octubre-noviembre para tenerlos listos antes de fin de año. Para campañas de empresa, algunos clientes encargan en septiembre.",
	},
	{
		question: "¿Puedo personalizar cada calendario con datos diferentes?",
		answer:
			"Sí, con impresión digital de datos variables podemos personalizar cada unidad con nombre, logo o contenido distinto.",
	},
	{
		question: "¿Qué cantidad mínima puedo pedir?",
		answer:
			"No hay cantidad mínima. Puedes encargar desde 1 unidad, aunque a partir de 50-100 unidades el precio por unidad baja notablemente.",
	},
	{
		question: "¿Cuándo hay que encargar los calendarios de empresa?",
		answer:
			"Lo recomendable es cerrar el pedido en octubre. En noviembre y diciembre los plazos se alargan porque toda la producción del sector se concentra en esas semanas.",
	},
	{
		question: "¿Podéis marcar fechas propias de mi sector?",
		answer:
			"Sí. Además de festivos nacionales y locales, podemos destacar ferias, campañas, aniversarios de la empresa o cualquier fecha que quieras resaltar en el calendario.",
	},
	{
		question: "¿Qué diferencia hay entre wire-o y espiral?",
		answer:
			"El wire-o es metálico, de doble bucle, más rígido y con mejor acabado; es lo habitual en calendarios de empresa. La espiral de plástico es más económica pero se deforma con el uso.",
	},
];

const contentSections: ProductSection[] = [
	{
		title: "El calendario de empresa se cierra en octubre",
		body: [
			"Es el producto más estacional del catálogo y el que peor se planifica. Para que un calendario llegue a los clientes antes de Navidad, el arte final tiene que estar cerrado en octubre: hay que contar con la tirada, el encuadernado, el troquelado de la percha o el montaje del caballete, y con que la última semana de noviembre las imprentas van a tope.",
			"Quien lo deja para diciembre acaba repartiendo el calendario en enero, que es exactamente cuando ya no sirve: el cliente lleva dos semanas usando el de otro proveedor.",
		],
	},
	{
		title: "Qué formato encaja con qué objetivo",
		body: ["No todos los calendarios cumplen la misma función, y elegir mal es tirar la tirada:"],
		list: [
			"<strong>De pared con espiral:</strong> el clásico de 12 hojas. Va en cocina, taller o almacén y es el que más tiempo permanece a la vista. Necesita imagen grande y buena; es medio póster.",
			"<strong>De sobremesa con caballete:</strong> el que funciona en oficina. Se ve de cerca, así que admite más información: teléfonos, servicios, notas. Es el mejor para B2B.",
			"<strong>De bolsillo:</strong> barato y de tirada alta. Sirve para repartir en punto de venta, no para fidelizar.",
			"<strong>Magnético de nevera:</strong> muy efectivo en negocios de servicio a domicilio y reparación, porque se queda a mano justo donde se necesita el teléfono.",
			"<strong>Planificador de pared anual:</strong> una sola hoja grande. Es el que más agradecen los equipos que trabajan por proyectos.",
		],
	},
	{
		title: "Detalles que se pasan por alto",
		body: [
			"El santoral, las fases lunares y los festivos autonómicos hay que confirmarlos: los festivos de la Comunidad de Madrid no son los de Andalucía, y un calendario con el festivo equivocado se convierte en una anécdota que circula por toda la empresa.",
			"En calendarios de pared, deja margen inferior suficiente para que el taladro de la percha no se coma información. Y si van imágenes propias, necesitamos 300 ppp a tamaño real: una foto sacada de una web se ve perfecta en pantalla y granulada en papel a tamaño A3.",
		],
	},
];

const serviceSchema = buildServiceSchema({
	name: "Calendarios personalizados",
	description:
		"Calendarios personalizados de pared, sobremesa y bolsillo. Impresión en cualquier cantidad.",
	slug: "/catalogo/calendarios",
	imagePath: "/calendar-1.jpg",
});

export default async function Page() {
	const data = {
		title: "Calendarios",
		h1: "Calendarios personalizados en Madrid",
		product: "Calendarios",
		localProduct: "calendarios",
		sections: contentSections,
		subtitle: "Soluciones y servicios gráficos",
		image: "/calendar-1.jpg",
		specs: specRows,
		specsCaption:
			"Formatos y acabados de producción habitual. Los calendarios de empresa se cierran en octubre para llegar a la campaña de Navidad.",
		text: [
			"El calendario es una de las mejores herramientas de marketing. Siempre está a la vista en cualquier mesa, estante u oficina, recordando tu marca durante todo el año.",
			"Ofrecemos infinitas posibilidades, formatos y diseños: de pared con espiral, de sobremesa, de bolsillo, marcapáginas, magnéticos y más. Cualquier cantidad, medida y soporte.",
			"Personalizamos cada calendario con imágenes, textos y datos de tu empresa. Un regalo corporativo que tus clientes utilizarán a diario.",
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
