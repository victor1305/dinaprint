import Link from "next/link";

import { FAQ, KnowMore, SectionPrincipalBanner } from "@/components/atoms";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Imprenta en Madrid",
	description:
		"Imprenta en Madrid especializada en impresión digital y offset. Papelería corporativa, folletos, carteles, packaging y más. Servicio en Madrid y sur de Madrid.",
	alternates: {
		canonical: "/imprenta-madrid",
	},
	keywords: [
		"imprenta madrid",
		"imprenta en madrid",
		"impresión digital madrid",
		"impresión offset madrid",
		"imprenta sur de madrid",
		"papelería corporativa madrid",
		"imprimir folletos madrid",
		"imprimir carteles madrid",
		"packaging madrid",
	],
};

const faqItems = [
	{
		question: "¿Qué tipos de impresión ofrecéis en Madrid?",
		answer:
			"Ofrecemos impresión digital para tiradas cortas y personalizadas, e impresión offset para grandes volúmenes con máxima consistencia de color. También disponemos de impresión de gran formato para cartelería, lonas y roll ups.",
	},
	{
		question: "¿Cuáles son los plazos de entrega habituales?",
		answer:
			"Los plazos varían según el producto y la tirada. Para trabajos digitales sencillos podemos entregar en 24-48 horas. Los trabajos offset suelen requerir entre 5 y 7 días laborables. Siempre te confirmamos el plazo exacto con el presupuesto.",
	},
	{
		question: "¿Hacéis envíos a toda España?",
		answer:
			"Sí, enviamos a toda la península sin coste adicional. Para envíos urgentes o a Baleares, Canarias y fuera de España, consúltanos y te daremos opciones.",
	},
	{
		question: "¿Puedo encargar tiradas pequeñas?",
		answer:
			"Por supuesto. Gracias a la impresión digital podemos producir desde una sola unidad hasta miles de copias. No hay cantidad mínima para la mayoría de productos.",
	},
	{
		question: "¿Ofrecéis servicios de diseño gráfico?",
		answer:
			"Sí, contamos con un departamento de diseño que puede ayudarte a crear o adaptar tu material. También revisamos todos los archivos antes de imprimir para asegurar que el resultado sea óptimo.",
	},
];

export default async function Page() {
	return (
		<main>
			<SectionPrincipalBanner
				title="Imprenta en Madrid"
				subtitle="Impresión digital y offset · Madrid y sur de Madrid"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				{/* Introducción */}
				<h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
					Tu imprenta de confianza en Madrid
				</h2>
				<p className="pt-4 text-base lg:text-lg">
					En Dinaprint llevamos más de 25 años ayudando a empresas y particulares a materializar sus
					proyectos de comunicación gráfica. Nuestra imprenta en Madrid ofrece soluciones completas:
					desde el asesoramiento inicial y la preimpresión hasta la producción, acabados y
					distribución. Trabajamos con las últimas tecnologías de impresión digital y offset para
					garantizar la máxima calidad en cada trabajo.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Estamos ubicados en Pinto, en el sur de Madrid, con excelente acceso desde la capital y
					toda la zona sur. Nuestro equipo te asesorará sobre materiales, papeles, gramajes y
					acabados para que elijas la opción más adecuada según tu proyecto y presupuesto.
				</p>

				{/* Tipos de impresión */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Tecnologías de impresión
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Impresión digital</h4>
						<p className="pt-2">
							Ideal para tiradas cortas y medias, personalización variable y entregas rápidas.
							Utilizamos equipos de última generación como la Fuji Jet Press 7S, que alcanza más del
							90 % de la gama Pantone. Perfecta para pruebas, prototipos, muestras y producciones
							que requieren flexibilidad.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Impresión offset</h4>
						<p className="pt-2">
							Recomendable para tiradas grandes donde la consistencia de color y el coste unitario
							son clave. Garantizamos resultados profesionales en revistas, catálogos, folletos y
							cualquier producto que requiera alta calidad y volumen.
						</p>
					</div>
				</div>

				{/* Productos */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Productos más demandados
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Nuestra imprenta en Madrid cubre todas las necesidades de comunicación gráfica de tu
					negocio:
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
					<Link
						href="/catalogo/papeleria-corporativa"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Papelería corporativa</h4>
						<p className="text-sm pt-1">
							Tarjetas de visita, carpetas, cartas, sobres y catálogos.
						</p>
					</Link>
					<Link
						href="/catalogo/folletos-y-revistas"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Folletos y revistas</h4>
						<p className="text-sm pt-1">Encuadernación wire-o, hilo, cola PUR y grapado.</p>
					</Link>
					<Link
						href="/catalogo/flyers-y-desplegables"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Flyers y desplegables</h4>
						<p className="text-sm pt-1">Buzoneo, promociones y puntos de venta.</p>
					</Link>
					<Link
						href="/catalogo/carteles"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Carteles y cartelería</h4>
						<p className="text-sm pt-1">Papel, rígidos, lonas y materiales especiales.</p>
					</Link>
					<Link
						href="/catalogo/cajas-y-packaging"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Cajas y packaging</h4>
						<p className="text-sm pt-1">Packaging personalizado con acabados premium.</p>
					</Link>
					<Link
						href="/catalogo/roll-up"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Roll ups y expositores</h4>
						<p className="text-sm pt-1">Soluciones para ferias, eventos y punto de venta.</p>
					</Link>
				</div>

				{/* Acabados */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Acabados y manipulados
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Complementamos la impresión con una amplia gama de acabados para dar un toque distintivo a
					tu material:
				</p>
				<ul className="list-disc pl-5 pt-4 space-y-2">
					<li>
						<strong>Plastificados:</strong> mate, brillo y soft-touch para proteger y realzar.
					</li>
					<li>
						<strong>Barnices:</strong> UVI selectivo, reserva de brillo y barniz aroma.
					</li>
					<li>
						<strong>Troquelados:</strong> formas especiales, ventanas y perforaciones.
					</li>
					<li>
						<strong>Encuadernaciones:</strong> wire-o, espiral, cosido, fresado y cola PUR.
					</li>
					<li>
						<strong>Stamping y relieve:</strong> golpe en seco, hot stamping oro/plata.
					</li>
				</ul>

				{/* Zona de servicio */}
				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">Zona de servicio</h3>
				<p className="pt-4 text-base lg:text-lg">
					Damos servicio a toda la Comunidad de Madrid y especialmente a la zona sur: Pinto,
					Valdemoro, Getafe, Parla, Fuenlabrada, Leganés, Alcorcón y alrededores. También enviamos a
					toda España sin coste adicional en la mayoría de pedidos.
				</p>

				{/* FAQ */}
				<div className="pt-6">
					<FAQ items={faqItems} />
				</div>
			</section>

			<KnowMore path={"/contacto"} copy={"PIDE PRESUPUESTO"} />
		</main>
	);
}
