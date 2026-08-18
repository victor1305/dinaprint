import Link from "next/link";

import { FAQ, JsonLd, KnowMore, SectionPrincipalBanner } from "@/components/atoms";
import { FindUs } from "@/components/molecules";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprenta en Pinto (Madrid)",
	description:
		"Imprenta en Pinto (Madrid) con impresión digital y offset. Papelería corporativa, folletos, carteles, packaging y acabados. Servicio para el sur de Madrid.",
	alternates: {
		canonical: "/imprenta-pinto",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Imprenta en Pinto (Madrid)",
		url: absoluteUrl("/imprenta-pinto"),
		description:
			"Imprenta en Pinto (Madrid) con impresión digital y offset. Papelería corporativa, folletos, carteles, packaging y acabados. Servicio para el sur de Madrid.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Imprenta Dinaprint - Pinto")],
	},
	twitter: {
		title: "Imprenta en Pinto (Madrid)",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"imprenta pinto",
		"imprenta en pinto",
		"imprenta madrid sur",
		"impresión digital pinto",
		"impresión offset pinto",
		"packaging pinto",
		"folletos pinto",
		"carteles pinto",
	],
};

const faqItems = [
	{
		question: "¿Dónde está vuestra imprenta en Pinto?",
		answer:
			"Estamos en la calle Coto de Doñana, 9, en el Área Empresarial Andalucía (28320 Pinto, Madrid). Tenemos fácil acceso desde la A-4 y buena conexión con Cercanías.",
	},
	{
		question: "¿Puedo recoger mi pedido en la imprenta?",
		answer:
			"Sí, puedes recoger tu pedido en nuestras instalaciones en horario de lunes a viernes. Te avisamos cuando esté listo para que no tengas que esperar.",
	},
	{
		question: "¿Hacéis trabajos urgentes?",
		answer:
			"Sí, disponemos de servicio urgente para impresión digital. Algunos productos pueden estar listos en el mismo día o en 24 horas. Consúltanos disponibilidad.",
	},
	{
		question: "¿Qué papeles y gramajes tenéis disponibles?",
		answer:
			"Trabajamos con una amplia variedad: estucados brillo y mate (90-350 g), offset, reciclados, creativos, cartulinas y papeles especiales. Te asesoramos sobre el más adecuado para tu proyecto.",
	},
	{
		question: "¿Puedo ver muestras antes de imprimir?",
		answer:
			"Por supuesto. Puedes pedirnos muestras de papel y acabados, y también hacemos pruebas de color para trabajos que lo requieran.",
	},
];

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<SectionPrincipalBanner
				title="Imprenta en Pinto (Madrid)"
				subtitle="Atención cercana · Producción y acabados profesionales"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				{/* Introducción */}
				<h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
					Imprenta profesional en Pinto
				</h2>
				<p className="pt-4 text-base lg:text-lg">
					Dinaprint es una imprenta ubicada en Pinto (Madrid) con más de 25 años de experiencia en
					el sector gráfico. Si buscas una imprenta cercana con atención personalizada, somos tu
					mejor opción. Te ayudamos a preparar tus archivos, elegir el papel y los acabados
					adecuados, y te asesoramos sobre la mejor tecnología de impresión según tu tirada y
					presupuesto.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Trabajamos tanto con empresas como con particulares, desde pequeños encargos hasta grandes
					tiradas. Nuestra ubicación en el sur de Madrid nos permite dar servicio rápido a toda la
					zona: Valdemoro, Getafe, Parla, Fuenlabrada y, por supuesto, Madrid capital.
				</p>

				{/* Servicios destacados */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Nuestros servicios
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Preimpresión</h4>
						<p className="pt-2">
							Revisión y optimización de archivos. Comprobamos resolución, sangrados, tipografías y
							colores antes de imprimir.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Impresión</h4>
						<p className="pt-2">
							Digital para tiradas cortas y offset para grandes volúmenes. Máxima calidad y
							consistencia de color.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Acabados</h4>
						<p className="pt-2">
							Plastificados, barnices, troquelados, encuadernaciones, stamping y manipulados
							especiales.
						</p>
					</div>
				</div>

				{/* Productos */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Productos que imprimimos
				</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
					<Link
						href="/catalogo/papeleria-corporativa"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Tarjetas</span>
					</Link>
					<Link
						href="/catalogo/folletos-y-revistas"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Folletos</span>
					</Link>
					<Link
						href="/catalogo/carteles"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Carteles</span>
					</Link>
					<Link
						href="/catalogo/cajas-y-packaging"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Packaging</span>
					</Link>
					<Link
						href="/catalogo/calendarios"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Calendarios</span>
					</Link>
					<Link
						href="/catalogo/roll-up"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Roll ups</span>
					</Link>
					<Link
						href="/catalogo/expositores"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Expositores</span>
					</Link>
					<Link
						href="/catalogo/regalo-promocional"
						className="p-4 rounded-xl shadow-findBox bg-white text-center hover:shadow-lg transition-shadow"
					>
						<span className="font-semibold">Merchandising</span>
					</Link>
				</div>

				{/* Ventajas */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Ventajas de trabajar con nosotros
				</h3>
				<ul className="list-disc pl-5 pt-4 space-y-2">
					<li>
						<strong>Cercanía:</strong> puedes visitarnos, ver muestras y recoger tu pedido.
					</li>
					<li>
						<strong>Asesoramiento:</strong> te ayudamos a elegir materiales y acabados.
					</li>
					<li>
						<strong>Flexibilidad:</strong> desde 1 unidad hasta miles de copias.
					</li>
					<li>
						<strong>Envíos gratuitos:</strong> entrega en península sin coste adicional.
					</li>
					<li>
						<strong>Experiencia:</strong> más de 25 años en el sector gráfico.
					</li>
				</ul>

				{/* Cómo llegar */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Dónde estamos y cómo llegar
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Estamos en la calle Coto de Doñana, 9, dentro del Área Empresarial Andalucía de Pinto, uno
					de los polígonos con mejor acceso del corredor sur. Se llega directamente desde la{" "}
					<strong>A-4 (autovía de Andalucía)</strong>, y desde la M-506 y la M-408 si vienes de
					Getafe o Valdemoro. Hay aparcamiento en la puerta, así que recoger un pedido voluminoso no
					es problema.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Si te mueves en transporte público, la línea <strong>C-3 de Cercanías</strong> para en
					Pinto. Y si prefieres no desplazarte, enviamos a toda la península sin coste en la mayoría
					de pedidos.
				</p>

				{/* Recogida y entrega */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Recogida en taller y entrega en la zona sur
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Trabajar con una imprenta que tienes al lado cambia bastante las cosas. Puedes venir a ver
					y tocar muestras de papel antes de decidir, revisar una prueba de color impresa en vez de
					fiarte de una pantalla, y recoger el pedido el mismo día que sale de máquina cuando vas
					justo de plazo.
				</p>
				<ul className="list-disc pl-5 pt-4 space-y-2">
					<li>
						<strong>Recogida en taller:</strong> sin coste y sin esperar al transporte.
					</li>
					<li>
						<strong>Entrega en el corredor sur:</strong> Valdemoro, Getafe, Parla, San Martín de la
						Vega, Ciempozuelos, Fuenlabrada y Leganés.
					</li>
					<li>
						<strong>Madrid capital:</strong> a unos 20 km por la A-4.
					</li>
					<li>
						<strong>Resto de la península:</strong> envío incluido en la mayoría de pedidos.
					</li>
				</ul>
				<p className="pt-4 text-base lg:text-lg">
					¿Buscas cobertura más amplia? Mira también nuestras páginas de{" "}
					<Link href="/imprenta-sur-de-madrid" className="text-primary underline">
						imprenta en el sur de Madrid
					</Link>{" "}
					e{" "}
					<Link href="/imprenta-madrid" className="text-primary underline">
						imprenta en Madrid
					</Link>
					.
				</p>

				{/* FAQ */}
				<div className="pt-6">
					<FAQ items={faqItems} />
				</div>

				{/* Ubicación */}
				<div className="pt-10">
					<FindUs />
				</div>
			</section>

			<KnowMore path={"/catalogo"} copy={"VER CATÁLOGO"} />
		</main>
	);
}
