import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { OG_DEFAULTS, absoluteUrl, buildServiceSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { ProductSection } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Papelería corporativa para empresas en Madrid",
	description:
		"Papelería corporativa en Madrid (Pinto): tarjetas de visita, carpetas, cartas, catálogos y folletos con acabados profesionales.",
	alternates: {
		canonical: "/catalogo/papeleria-corporativa",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Papelería corporativa para empresas en Madrid",
		url: absoluteUrl("/catalogo/papeleria-corporativa"),
		description:
			"Papelería corporativa en Madrid (Pinto): tarjetas de visita, carpetas, cartas, catálogos y folletos con acabados profesionales.",
		images: [ogImage("/papeleria-corporativa-01.jpg", "Papelería corporativa - Dinaprint")],
	},
	twitter: {
		title: "Papelería corporativa para empresas en Madrid",
		images: [ogImageUrl("/papeleria-corporativa-01.jpg")],
	},
	keywords: [
		"papelería corporativa",
		"tarjetas de visita madrid",
		"carpetas corporativas",
		"imprenta madrid",
		"imprenta pinto",
	],
};

const specRows = [
	{
		label: "Tarjetas de visita",
		value: "85×55 mm estándar. También 90×50 mm, cuadradas 55×55 mm y formatos a medida.",
	},
	{
		label: "Papeles de tarjeta",
		value: "Estucado de 300 a 400 g, cartulinas texturadas, reciclados y papeles de algodón.",
	},
	{
		label: "Hojas de carta",
		value: "A4 en offset ahuesado o estucado de 90 a 120 g, con o sin membrete impreso.",
	},
	{
		label: "Sobres",
		value: "Americano 110×220 mm (DL), C5 y C4, con y sin ventana, impresos a 1, 2 o 4 tintas.",
	},
	{
		label: "Carpetas",
		value: "A4 con solapas, lomo de 3 a 15 mm, ranura para tarjeta y troquel a medida.",
	},
	{
		label: "Acabados",
		value:
			"Plastificado mate, brillo o soft-touch, barniz UVI selectivo, stamping en oro y plata, y golpe en seco.",
	},
	{
		label: "Tirada mínima",
		value: "50 unidades en digital. El offset compensa a partir de unas 1.000.",
	},
	{
		label: "Plazo de entrega",
		value: "48-72 h en digital. De 4 a 6 días laborables con acabados especiales.",
	},
	{
		label: "Archivos",
		value: "PDF en CMYK con 3 mm de sangre, 300 ppp y tipografías incrustadas o trazadas.",
	},
];

const faqItems = [
	{
		question: "¿Qué gramaje recomendáis para tarjetas de visita?",
		answer:
			"Para tarjetas de visita profesionales recomendamos un gramaje mínimo de 300-350 g en estucado mate o brillo. Si buscas un tacto premium, puedes optar por papeles creativos o añadir acabados como plastificado soft-touch.",
	},
	{
		question: "¿Puedo imprimir pocas tarjetas de visita?",
		answer:
			"Sí, gracias a la impresión digital podemos producir desde 50 unidades. No hay cantidad mínima obligatoria, así que puedes pedir exactamente lo que necesitas.",
	},
	{
		question: "¿Qué acabados ofrecéis para papelería corporativa?",
		answer:
			"Ofrecemos plastificado mate, brillo y soft-touch, barniz UVI selectivo, stamping en oro/plata, troquelados especiales, relieve en seco y esquinas redondeadas, entre otros.",
	},
	{
		question: "¿Hacéis carpetas con bolsillo?",
		answer:
			"Sí, fabricamos carpetas corporativas con uno o dos bolsillos, con o sin ranura para tarjeta. Personalizamos medidas, solapas y acabados según tus necesidades.",
	},
	{
		question: "¿Cuál es el gramaje ideal para una tarjeta de visita?",
		answer:
			"A partir de 300 g. Por debajo, la tarjeta se percibe endeble y se dobla en el bolsillo. Si buscas una sensación premium, 350-400 g con plastificado soft-touch marca una diferencia clara al tacto.",
	},
	{
		question: "¿Podéis imprimir con datos variables?",
		answer:
			"Sí. Con impresión digital producimos tarjetas con el nombre y el cargo de cada persona en una sola tirada, sin coste añadido por versión. Solo necesitamos la lista en una hoja de cálculo.",
	},
	{
		question: "¿Hacéis sobres impresos a juego con las cartas?",
		answer:
			"Sí, imprimimos sobres americanos, C5 y C4, con o sin ventana, a juego con el resto de la papelería. Se pueden imprimir a una tinta para abaratar o a todo color.",
	},
];

const contentSections: ProductSection[] = [
	{
		title: "Qué decidir antes de pedir presupuesto",
		body: [
			"La papelería corporativa se presupuesta mal cuando se pide «tarjetas y carpetas» sin más. El precio y, sobre todo, el resultado dependen de tres decisiones que conviene tomar antes: el gramaje, si la impresión va a una o dos caras y qué acabado lleva.",
			"En tarjetas de visita, por debajo de 300 g el resultado se nota blando en la mano y es la queja más habitual. El estándar razonable son 350 g estucado; a partir de 400 g con acabado soft touch la pieza pasa a otra categoría, y ahí ya compensa plantearse un troquelado o un canto pintado.",
			"En hojas de carta ocurre lo contrario: subir de 100 g no aporta nada porque el papel tiene que pasar por la impresora láser del cliente. El offset ahuesado de 90 o 100 g es lo que mejor funciona y lo que menos problemas da luego en la oficina.",
		],
	},
	{
		title: "Los errores que más veces devolvemos en preimpresión",
		body: [
			"Revisamos todos los archivos antes de tirar y estos cuatro son los que aparecen una y otra vez:",
		],
		list: [
			"<strong>Logotipo en RGB o en JPG.</strong> El azul corporativo que se ve en pantalla no existe en CMYK. Si la marca tiene un Pantone definido, mándanoslo y lo respetamos.",
			"<strong>Sin sangre.</strong> Cualquier color o imagen que llegue al borde necesita 3 mm de más por cada lado, o aparecerá un filo blanco al guillotinar.",
			"<strong>Texto demasiado cerca del corte.</strong> Deja al menos 4 mm de margen de seguridad; la guillotina tiene una tolerancia real de 1 mm.",
			"<strong>Negro al 100 % en fondos grandes.</strong> Un negro plano sale lavado. Para masas usamos un negro rico (60/40/40/100), que es lo que da profundidad.",
		],
	},
	{
		title: "Producir toda la identidad de una vez sale mejor",
		body: [
			"Si vas a renovar la imagen, agrupa las piezas en un solo pedido en vez de ir sacándolas por separado a lo largo del año. No es solo cuestión de precio: cuando las tarjetas, las carpetas y el papel de carta salen de la misma tirada, el color es idéntico en todas. Repartido en tres pedidos con meses de diferencia, el mismo Pantone acaba bailando entre piezas y se nota al ponerlas juntas encima de una mesa.",
			"Lo habitual en un arranque de identidad es tarjetas de visita, hojas de carta, sobres americanos con y sin ventana, carpetas portadocumentos y sellos. A partir de ahí se añade lo que pida el sector: talonarios, etiquetas o albaranes autocopiativos.",
		],
	},
];

const serviceSchema = buildServiceSchema({
	name: "Papelería corporativa",
	description:
		"Tarjetas de visita, carpetas, cartas, sobres y catálogos con acabados profesionales.",
	slug: "/catalogo/papeleria-corporativa",
	imagePath: "/papeleria-corporativa-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Papelería corporativa",
		h1: "Papelería corporativa para empresas en Madrid",
		product: "Papelería corporativa",
		localProduct: "papelería corporativa",
		sections: contentSections,
		subtitle: "Soluciones y servicios gráficos",
		image: "/papeleria-corporativa-01.jpg",
		specs: specRows,
		specsCaption:
			"Estas son las combinaciones que producimos habitualmente. Si necesitas un formato o acabado que no aparece, consúltanos.",
		text: [
			"La comunicación impresa de cualquier negocio o empresa transmite su identidad y provoca sensaciones y opiniones. Para ello se utilizan tanto tarjetas como carpetas, cartas, catálogos, folletos y sobres.",
			"Todos los elementos deben transmitir uniformidad y el mismo estilo gráfico, creando una sensación de seguridad y profesionalidad. Una imagen corporativa coherente genera confianza en clientes y colaboradores.",
			"La <b>herramienta más utilizada es la tarjeta de visita</b>, fundamental en la creación de relaciones nuevas. Normalmente se entrega a un contacto que puede representar a un cliente potencial.",
			"Actualmente hay miles de estilos y soportes que aportan originalidad y buen gusto: papeles creativos, acabados especiales, troqueles, relieves y stamping. Te asesoramos para encontrar la opción perfecta para tu marca.",
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
