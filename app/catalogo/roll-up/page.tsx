import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Roll up en Madrid para ferias y eventos",
	description:
		"Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.",
	alternates: {
		canonical: "/catalogo/roll-up",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Roll up en Madrid para ferias y eventos",
		url: absoluteUrl("/catalogo/roll-up"),
		description:
			"Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.",
		images: [ogImage("/rollup-001.jpg", "Roll up - Dinaprint")],
	},
	twitter: {
		title: "Roll up en Madrid para ferias y eventos",
		images: [ogImageUrl("/rollup-001.jpg")],
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

const contentSections: ProductSection[] = [
	{
		title: "Qué separa un roll up que dura de uno que no",
		body: [
			"Todos los roll ups se parecen en la foto y se diferencian al tercer montaje. La estructura es donde está la diferencia real de precio y de vida útil.",
			"Un mecanismo económico lleva base ligera y barra de un tramo: se ondula con el uso, la gráfica no queda tensa y el conjunto se vence si alguien lo roza. Uno profesional lleva base de aluminio con peso, barra de tres tramos y tensión regulable, y aguanta decenas de montajes sin que la lona se abarquille.",
			"Si el roll up es para una feria puntual, el económico cumple. Si va a viajar a seis ferias al año en el maletero de un coche, el profesional sale más barato a la segunda temporada.",
		],
	},
	{
		title: "Diseñar para que se lea de pie",
		body: [
			"El error más repetido en gráficas de roll up es maquetar el diseño como si fuera un folleto en pantalla. Un roll up se ve de pie, a dos o tres metros y con gente delante.",
			"Los primeros 15 cm inferiores quedan ocultos dentro del mecanismo: cualquier cosa que pongas ahí desaparece. Y por debajo de 60 cm el visitante no mira, porque tiene el cuerpo de otra persona delante.",
			"El contenido que importa —marca, propuesta, forma de contacto— va entre 120 y 180 cm de altura, que es la franja de lectura cómoda. Arriba del todo, el logotipo; abajo, solo elementos decorativos.",
		],
	},
	{
		title: "Reaprovechar la estructura",
		body: [
			"Si ya tienes roll ups de una feria anterior y la estructura está bien, no hace falta comprar el conjunto entero: imprimimos solo la gráfica nueva y la cambiamos sobre el mecanismo existente. Sale bastante más barato y evita acumular estructuras en el almacén.",
			"Para eso necesitamos saber la medida exacta de la gráfica actual y el tipo de fijación —adhesivo, perfil de clip o riel—, así que lo más práctico es traer el roll up al taller de Pinto y lo vemos en un momento.",
		],
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
		h1: "Impresión de roll ups en Madrid para ferias y eventos",
		product: "Roll up",
		localProduct: "roll ups",
		sections: contentSections,
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
			{/* Schema del servicio */}
			<JsonLd data={serviceSchema} />

			<Product {...data} />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
