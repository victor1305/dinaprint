import Link from "next/link";

import { FAQ, JsonLd, KnowMore, SectionPrincipalBanner } from "@/components/atoms";

import { absoluteUrl, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprenta en el sur de Madrid",
	description:
		"Imprenta en el sur de Madrid: impresión digital y offset, acabados y envío. Servicio para Pinto, Valdemoro, Getafe y alrededores.",
	alternates: {
		canonical: "/imprenta-sur-de-madrid",
	},
	openGraph: {
		type: "website",
		title: "Imprenta sur de Madrid",
		url: absoluteUrl("/imprenta-sur-de-madrid"),
		description: "Imprenta en la zona sur de Madrid: servicio rápido y envíos a toda la península.",
		images: [
			{
				url: absoluteUrl("/slider-principal-dinaprint.jpg"),
				width: 1200,
				height: 630,
				alt: "Imprenta sur de Madrid - Dinaprint",
			},
		],
	},
	twitter: {
		title: "Imprenta sur de Madrid",
		images: [absoluteUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"imprenta sur de madrid",
		"imprenta madrid sur",
		"imprenta pinto",
		"imprenta valdemoro",
		"imprenta getafe",
		"impresión digital madrid sur",
		"impresión offset madrid sur",
	],
};

const faqItems = [
	{
		question: "¿Qué localidades del sur de Madrid cubrís?",
		answer:
			"Damos servicio a Pinto, Valdemoro, Getafe, Parla, Fuenlabrada, Leganés, Alcorcón, Móstoles y todas las localidades del sur de Madrid. También enviamos a toda España.",
	},
	{
		question: "¿Tenéis servicio de recogida de archivos?",
		answer:
			"Puedes enviarnos los archivos por email o WeTransfer. Si lo prefieres, también puedes traerlos en persona a nuestra sede en Pinto o coordinamos recogida para pedidos grandes.",
	},
	{
		question: "¿Qué diferencia hay entre impresión digital y offset?",
		answer:
			"La impresión digital es ideal para tiradas cortas (desde 1 unidad), personalización y entregas rápidas. La offset es más rentable para tiradas grandes y ofrece mayor consistencia de color en producciones de alto volumen.",
	},
	{
		question: "¿Trabajáis con agencias y estudios de diseño?",
		answer:
			"Sí, colaboramos habitualmente con agencias de publicidad, estudios de diseño y freelances. Ofrecemos condiciones especiales para partners recurrentes.",
	},
	{
		question: "¿Cómo solicito un presupuesto?",
		answer:
			"Puedes contactarnos por teléfono, email o a través del formulario de la web. Cuéntanos qué necesitas (producto, cantidad, medidas, acabados) y te enviamos presupuesto sin compromiso.",
	},
];

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<SectionPrincipalBanner
				title="Imprenta en el sur de Madrid"
				subtitle="Pinto, Valdemoro, Getafe y alrededores"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				{/* Introducción */}
				<h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
					Tu imprenta en el sur de Madrid
				</h2>
				<p className="pt-4 text-base lg:text-lg">
					Si tu empresa está en el sur de Madrid y buscas una imprenta cercana con trato directo, en
					Dinaprint te ofrecemos la combinación perfecta de cercanía, calidad y experiencia.
					Llevamos más de 25 años trabajando con clientes de Pinto, Valdemoro, Getafe, Parla,
					Fuenlabrada y toda la zona sur.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Nuestra ubicación en Pinto nos permite ofrecer un servicio rápido y personalizado. Puedes
					visitarnos para ver muestras, recoger tu pedido o simplemente comentar tu proyecto en
					persona. Y si lo prefieres, también enviamos a toda España.
				</p>

				{/* Para quién trabajamos */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Soluciones para cada necesidad
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Para empresas</h4>
						<p className="pt-2">
							Papelería corporativa completa: tarjetas, carpetas, cartas, catálogos, folletos y
							material para ferias. Transmite una imagen profesional y coherente.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Para comercios</h4>
						<p className="pt-2">
							Cartelería, precios, promociones, packaging y material para punto de venta. Destacar
							en tu local nunca fue tan fácil.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Para eventos</h4>
						<p className="pt-2">
							Invitaciones, programas, roll ups, photocalls y todo lo que necesitas para que tu
							evento sea memorable.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Para particulares</h4>
						<p className="pt-2">
							Invitaciones de boda, libros de fotos, álbumes, tarjetas personalizadas y proyectos
							especiales con tiradas mínimas.
						</p>
					</div>
				</div>

				{/* Localidades */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Localidades que servimos
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Aunque nuestra sede está en Pinto, damos servicio preferente a todo el sur de Madrid:
				</p>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
					{[
						"Pinto",
						"Valdemoro",
						"Getafe",
						"Parla",
						"Fuenlabrada",
						"Leganés",
						"Alcorcón",
						"Móstoles",
						"Ciempozuelos",
						"San Martín de la Vega",
						"Torrejón de Velasco",
						"Griñón",
					].map((ciudad) => (
						<span
							key={ciudad}
							className="px-3 py-2 bg-white shadow-findBox rounded-lg text-center text-sm"
						>
							{ciudad}
						</span>
					))}
				</div>

				{/* Productos */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Qué podemos imprimir
				</h3>
				<div className="pt-4 flex flex-wrap gap-3">
					<Link
						href="/catalogo/papeleria-corporativa"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Papelería
					</Link>
					<Link
						href="/catalogo/folletos-y-revistas"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Folletos
					</Link>
					<Link
						href="/catalogo/flyers-y-desplegables"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Flyers
					</Link>
					<Link
						href="/catalogo/carteles"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Carteles
					</Link>
					<Link
						href="/catalogo/cajas-y-packaging"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Packaging
					</Link>
					<Link
						href="/catalogo/roll-up"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Roll ups
					</Link>
					<Link
						href="/catalogo/expositores"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Expositores
					</Link>
					<Link
						href="/catalogo/calendarios"
						className="px-4 py-2 bg-white shadow-findBox rounded-full hover:shadow-lg transition-shadow"
					>
						Calendarios
					</Link>
				</div>

				{/* Municipios */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Municipios a los que damos servicio
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Nuestro taller está en Pinto, en pleno corredor de la A-4, lo que nos deja a pocos minutos
					de la mayor parte del área industrial y comercial del sur de la Comunidad de Madrid. Estas
					son las zonas donde trabajamos a diario:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Corredor de la A-4</h4>
						<p className="pt-2">
							Pinto, Valdemoro, Ciempozuelos, San Martín de la Vega, Titulcia y Aranjuez.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Área metropolitana sur</h4>
						<p className="pt-2">
							Getafe, Leganés, Parla, Fuenlabrada, Alcorcón, Móstoles y Humanes de Madrid.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Madrid capital</h4>
						<p className="pt-2">
							Villaverde, Usera, Carabanchel, Arganzuela y el resto de la ciudad por la A-4 y la
							M-40.
						</p>
					</div>
				</div>

				{/* Por qué una imprenta de zona */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Por qué elegir una imprenta de la zona
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					El sur de Madrid concentra buena parte del tejido industrial y logístico de la comunidad:
					polígonos con empresas que necesitan catálogos de producto, packaging, señalética y
					material de punto de venta con plazos ajustados. Tener la imprenta a veinte minutos evita
					el problema clásico de la imprenta online: cuando algo sale mal en producción, no hay
					nadie al otro lado con quien resolverlo esa misma mañana.
				</p>
				<ul className="list-disc pl-5 pt-4 space-y-2">
					<li>
						<strong>Muestras físicas</strong> antes de cerrar el pedido, no simulaciones en
						pantalla.
					</li>
					<li>
						<strong>Prueba de color impresa</strong> sobre el papel definitivo.
					</li>
					<li>
						<strong>Un interlocutor</strong> que conoce tu trabajo y tus repeticiones.
					</li>
					<li>
						<strong>Urgencias reales:</strong> recogida en taller el mismo día si el plazo aprieta.
					</li>
				</ul>
				<p className="pt-4 text-base lg:text-lg">
					Si estás justo en Pinto, tienes el detalle de cómo llegar y los horarios en nuestra página
					de{" "}
					<Link href="/imprenta-pinto" className="text-primary underline">
						imprenta en Pinto
					</Link>
					.
				</p>

				{/* FAQ */}
				<div className="pt-6">
					<FAQ items={faqItems} />
				</div>
			</section>

			<KnowMore path={"/contacto"} copy={"CONTACTAR"} />
		</main>
	);
}
