import Link from "next/link";

import {
	Breadcrumbs,
	FAQ,
	JsonLd,
	KnowMore,
	SectionPrincipalBanner,
	SpecTable,
} from "@/components/atoms";
import {
	absoluteUrl,
	buildProductSchema,
	buildServiceSchema,
	getLocalBusinessSchema,
} from "@/lib/seo";

import type { Metadata } from "next";

const TITLE = "Impresión de cartas y menús para restaurantes";
const DESCRIPTION =
	"Impresión de cartas y menús de restaurante en Madrid: papel laminado, sintético lavable y fundas. Formatos, gramajes y plazos desde 25 unidades.";
const IMAGE = "/folletos.jpg";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: {
		canonical: "/catalogo/cartas-y-menus",
	},
	openGraph: {
		type: "website",
		title: TITLE,
		url: absoluteUrl("/catalogo/cartas-y-menus"),
		description: DESCRIPTION,
		images: [
			{
				url: absoluteUrl(IMAGE),
				width: 1200,
				height: 630,
				alt: "Impresión de cartas y menús para restaurantes",
			},
		],
	},
	twitter: { title: TITLE, description: DESCRIPTION, images: [absoluteUrl(IMAGE)] },
	keywords: [
		"imprimir menú restaurante",
		"impresión de cartas para restaurantes",
		"imprimir cartas restaurante",
		"papel para imprimir menús",
		"imprenta para restaurantes",
		"tamaños de menús de restaurante",
		"impresión de menús madrid",
	],
};

const specRows = [
	{
		label: "Formatos habituales",
		value:
			"A4 (210×297 mm) y A5 para carta de mano. Alargado 100×297 mm para menú del día y 210×210 cm cuadrado para carta de vinos.",
	},
	{
		label: "Carta de una hoja",
		value:
			"Estucado de 300 a 350 g con plastificado por las dos caras. Es la opción más económica y la que más se reimprime.",
	},
	{
		label: "Carta laminada",
		value:
			"Plastificado mate antihuellas o brillo de 125 micras. Resiste la limpieza con paño húmedo y aguanta meses de manipulación diaria.",
	},
	{
		label: "Papel sintético lavable",
		value:
			"Polipropileno de 200 a 400 micras. Impermeable, no se rasga y se desinfecta con producto sin deteriorarse. Lo indicado para terraza y alta rotación.",
	},
	{
		label: "Carta encuadernada",
		value:
			"Interiores plastificados con encuadernación wire-o o cosida, y tapa rígida forrada. Para cartas extensas y de vinos.",
	},
	{
		label: "Fundas y portamenús",
		value:
			"Portamenús de polipiel o madera con hojas intercambiables, para actualizar precios sin reimprimir la tapa.",
	},
	{
		label: "Menú del día",
		value:
			"Impresión en offset ahuesado de 90 a 120 g sin plastificar, pensada para cambiar a diario. También pizarra impresa y cartel A3.",
	},
	{
		label: "Códigos QR",
		value:
			"Generamos e imprimimos el QR de la carta digital, en la propia carta o en vinilo de mesa resistente a la limpieza.",
	},
	{
		label: "Tirada mínima",
		value: "25 unidades en digital, para que cambiar la carta cada temporada no salga caro.",
	},
	{
		label: "Plazo de entrega",
		value: "48-72 h en carta plastificada. De 5 a 7 días laborables en sintético y encuadernación.",
	},
];

const faqItems = [
	{
		question: "¿Qué papel aguanta mejor en una carta de restaurante?",
		answer:
			"Depende de la rotación. Para uso normal, estucado de 300-350 g con plastificado de 125 micras por ambas caras aguanta meses. Para terraza, alta rotación o locales donde la carta se limpia entre servicios, el polipropileno sintético es lo que de verdad dura: es impermeable, no se rasga y se desinfecta sin deteriorarse.",
	},
	{
		question: "¿Qué tamaño es el más habitual para una carta?",
		answer:
			"El A4 es el estándar y el que mejor relación tiene entre legibilidad y manejo en mesa. El A5 funciona bien como carta de postres o de cócteles. Para el menú del día, el formato alargado de 100×297 mm se maneja muy cómodo y cabe en cualquier mesa sin estorbar.",
	},
	{
		question: "¿Cómo actualizo los precios sin reimprimir toda la carta?",
		answer:
			"Con portamenús de hojas intercambiables: la tapa se mantiene y solo se reimprimen las hojas interiores. Si los precios te cambian a menudo, sepáralos de la descripción en el diseño y deja el bloque de precios en una hoja aparte. Así reimprimes una hoja en vez de toda la carta.",
	},
	{
		question: "¿Merece la pena el plastificado mate o el brillo?",
		answer:
			"El mate antihuellas es el más agradecido en hostelería: no refleja los focos del local, disimula las marcas de dedos y se lee bien con poca luz. El brillo satura más los colores de las fotos de plato, pero deja huellas visibles y refleja mucho en mesas junto a ventana.",
	},
	{
		question: "¿Podéis imprimir la carta en varios idiomas?",
		answer:
			"Sí. Lo habitual es una versión por idioma, con un distintivo de color en el canto o una banderita impresa para que el personal las distinga de un vistazo. Con impresión digital producir tres o cuatro versiones cortas no encarece apenas frente a una sola tirada.",
	},
	{
		question: "¿Incluís el diseño de la carta?",
		answer:
			"Sí, podemos maquetarla desde cero o adaptar la que ya tengas. En hostelería el diseño importa más de lo que parece: la jerarquía tipográfica y el orden de los platos influyen directamente en lo que se pide.",
	},
	{
		question: "¿Hacéis también la señalética y el resto de impresos del local?",
		answer:
			"Sí. Además de cartas y menús producimos carteles de promociones, vinilos de escaparate, manteles individuales impresos, tarjetas de reserva y cheques regalo para campañas de temporada.",
	},
];

const productSchema = buildProductSchema({
	name: "Impresión de cartas y menús para restaurantes",
	description: DESCRIPTION,
	slug: "/catalogo/cartas-y-menus",
	imagePath: IMAGE,
});

const serviceSchema = buildServiceSchema({
	name: "Impresión de cartas y menús para hostelería",
	description:
		"Cartas y menús de restaurante impresos en papel plastificado, sintético lavable y encuadernados, con tiradas desde 25 unidades.",
	slug: "/catalogo/cartas-y-menus",
	imagePath: IMAGE,
});

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<JsonLd data={productSchema} />
			<JsonLd data={serviceSchema} />

			<SectionPrincipalBanner
				title="Cartas y menús"
				h1="Impresión de cartas y menús para restaurantes"
				subtitle="Hostelería · Madrid y toda la península"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				<Breadcrumbs className="mb-8" />

				<h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
					Una carta es una herramienta de venta, no un listado
				</h2>
				<p className="pt-4 text-base lg:text-lg">
					La carta es el impreso que más se manipula de todo el local: se toca en cada servicio, se
					mancha, se limpia y tiene que leerse rápido y con poca luz. Elegir bien el formato y el
					material es la diferencia entre reimprimir cada pocas semanas o tener una carta que
					aguante meses con buen aspecto.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Imprimimos cartas, menús del día, cartas de vinos y de postres para restaurantes,
					cafeterías, bares y hoteles, desde nuestra imprenta de Pinto, en el sur de Madrid, con
					envío a toda la península.
				</p>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Elige según el uso real
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Carta fija</h4>
						<p className="pt-2">
							Cambia una o dos veces al año. Compensa invertir en plastificado de calidad o en
							sintético, porque va a soportar miles de manipulaciones.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Menú del día</h4>
						<p className="pt-2">
							Cambia a diario. Aquí no tiene sentido plastificar: papel offset sencillo, tirada
							corta y coste por unidad mínimo.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Carta de temporada</h4>
						<p className="pt-2">
							Cuatro cambios al año. Plastificado ligero y tirada corta en digital, para renovar sin
							que el coste se dispare cada trimestre.
						</p>
					</div>
				</div>

				<SpecTable
					title="Formatos, materiales y plazos"
					caption="Estas son las configuraciones que producimos habitualmente para hostelería. Si tu local necesita algo distinto, consúltanos."
					rows={specRows}
				/>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Errores que salen caros
				</h3>
				<ul className="list-disc pl-5 pt-4 space-y-2">
					<li>
						<strong>Cuerpo de letra demasiado pequeño.</strong> En un comedor con luz cálida y baja,
						por debajo de 9 puntos la carta no se lee. Es la queja número uno de los clientes.
					</li>
					<li>
						<strong>Precios pegados a la descripción.</strong> Si los separas en una columna o en
						una hoja aparte, actualizarlos no obliga a rehacer toda la maqueta.
					</li>
					<li>
						<strong>Plastificar el menú del día.</strong> Encarece un impreso que vas a tirar
						mañana.
					</li>
					<li>
						<strong>Fondos oscuros a sangre sin hendido</strong> en cartas plegadas: la tinta se
						agrieta en el pliegue al primer uso.
					</li>
					<li>
						<strong>Fotos de plato en RGB.</strong> Al convertir a CMYK los tonos de los alimentos
						pierden saturación y la comida se ve apagada.
					</li>
				</ul>
				<p className="pt-4 text-base lg:text-lg">
					Lo tienes desarrollado en nuestra guía sobre{" "}
					<Link
						href="/blog/como-imprimir-cartas-menus-restaurantes-materiales-formatos"
						className="text-primary underline"
					>
						cómo imprimir cartas y menús para restaurantes
					</Link>
					.
				</p>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					El resto de impresos del local
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
					<Link
						href="/catalogo/carteles"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Carteles y vinilos</h4>
						<p className="text-sm pt-1">Promociones, escaparate y señalética del local.</p>
					</Link>
					<Link
						href="/catalogo/flyers-y-desplegables"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Flyers de reparto</h4>
						<p className="text-sm pt-1">Buzoneo de apertura, promociones y servicio a domicilio.</p>
					</Link>
					<Link
						href="/catalogo/papeleria-corporativa"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Tarjetas y papelería</h4>
						<p className="text-sm pt-1">Tarjetas de reserva, comanderos y cheques regalo.</p>
					</Link>
				</div>

				<FAQ items={faqItems} />
			</section>

			<KnowMore path={"/contacto"} copy={"PEDIR PRESUPUESTO"} />
		</main>
	);
}
