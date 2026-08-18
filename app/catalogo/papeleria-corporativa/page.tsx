import { FAQ, JsonLd } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { absoluteUrl, buildServiceSchema, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Papelería corporativa en Madrid: tarjetas y carpetas",
	description:
		"Papelería corporativa en Madrid (Pinto): tarjetas de visita, carpetas, cartas, catálogos y folletos con acabados profesionales.",
	alternates: {
		canonical: "/catalogo/papeleria-corporativa",
	},
	openGraph: {
		type: "website",
		title: "Papelería corporativa en Madrid: tarjetas y carpetas",
		url: absoluteUrl("/catalogo/papeleria-corporativa"),
		description:
			"Papelería corporativa en Madrid (Pinto): tarjetas de visita, carpetas, cartas, catálogos y folletos con acabados profesionales.",
		images: [
			{
				url: absoluteUrl("/papeleria-corporativa-01.jpg"),
				width: 1200,
				height: 630,
				alt: "Papelería corporativa - Dinaprint",
			},
		],
	},
	twitter: {
		title: "Papelería corporativa en Madrid: tarjetas y carpetas",
		images: [absoluteUrl("/papeleria-corporativa-01.jpg")],
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
