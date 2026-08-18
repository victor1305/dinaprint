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
	OG_DEFAULTS,
	absoluteUrl,
	buildProductSchema,
	buildServiceSchema,
	getLocalBusinessSchema,
	ogImage,
	ogImageUrl,
} from "@/lib/seo";

import type { Metadata } from "next";

const TITLE = "Impresión de catálogos en Madrid: corta y larga tirada";
const DESCRIPTION =
	"Impresión de catálogos de productos en Madrid (Pinto): grapado, wire-o, cola PUR y cosido. Desde 25 unidades, digital y offset, con plazos de 48 h a 7 días.";
const IMAGE = "/impresion-dinaprint-revista.jpg";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: {
		canonical: "/catalogo/catalogos",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: TITLE,
		url: absoluteUrl("/catalogo/catalogos"),
		description: DESCRIPTION,
		images: [ogImage(IMAGE, "Impresión de catálogos")],
	},
	twitter: {
		title: TITLE,
		description: DESCRIPTION,
		images: [ogImageUrl(IMAGE)],
	},
	keywords: [
		"impresión de catálogos",
		"imprimir catálogos",
		"catálogos corta tirada",
		"catálogos imprenta madrid",
		"impresión de catálogos madrid",
		"catálogo de productos impreso",
		"imprimir catálogo grapado",
		"diseño e impresión de catálogos",
	],
};

const specRows = [
	{
		label: "Formatos habituales",
		value:
			"A4 (210×297 mm), A5 (148×210 mm), cuadrado 21×21 cm y 24×24 cm. También formatos a medida y apaisados.",
	},
	{
		label: "Número de páginas",
		value:
			"Desde 8 páginas. Con grapa, múltiplos de 4 hasta unas 64 páginas; con cola PUR o cosido, sin límite práctico.",
	},
	{
		label: "Encuadernaciones",
		value: "Grapa (caballete), wire-o, espiral, fresado con cola PUR y cosido con hilo vegetal.",
	},
	{
		label: "Papeles de interior",
		value:
			"Estucado mate o brillo de 115 a 170 g. Offset ahuesado y papeles reciclados o certificados FSC bajo petición.",
	},
	{
		label: "Papeles de cubierta",
		value: "Estucado de 250 a 350 g, con o sin plastificado. Cartulinas especiales y texturadas.",
	},
	{
		label: "Acabados de cubierta",
		value:
			"Plastificado mate, brillo o soft-touch, barniz UVI selectivo, stamping en oro o plata, golpe en seco y troquelado.",
	},
	{
		label: "Tirada mínima",
		value:
			"25 unidades en digital. A partir de unas 500 unidades el offset suele salir más rentable por ejemplar.",
	},
	{
		label: "Plazo de entrega",
		value:
			"48-72 h en digital una vez aprobada la prueba. De 5 a 7 días laborables en offset con acabados especiales.",
	},
	{
		label: "Archivos de impresión",
		value:
			"PDF en CMYK con 3 mm de sangre, marcas de corte, imágenes a 300 ppp y tipografías incrustadas o trazadas.",
	},
	{
		label: "Envíos",
		value:
			"A toda la península sin coste. Baleares, Canarias y resto de destinos, bajo presupuesto.",
	},
];

const faqItems = [
	{
		question: "¿Cuál es la tirada mínima para imprimir un catálogo?",
		answer:
			"Con impresión digital producimos desde 25 ejemplares, así que la corta tirada no es problema. A partir de unas 500 unidades merece la pena valorar el offset, porque el coste por ejemplar baja de forma notable.",
	},
	{
		question: "¿Qué encuadernación le conviene a mi catálogo?",
		answer:
			"Depende del número de páginas. Hasta unas 64 páginas, la grapa es la opción más económica y de apertura cómoda. Por encima de eso recomendamos cola PUR, que da lomo impreso y aspecto de revista. El wire-o es ideal para catálogos técnicos o de muestrario que deben quedar totalmente abiertos sobre la mesa.",
	},
	{
		question: "¿Cuánto tarda la impresión de un catálogo?",
		answer:
			"En digital, entre 48 y 72 horas desde que apruebas la prueba de color. En offset o con acabados especiales como stamping o troquelado, entre 5 y 7 días laborables. Si tienes una fecha límite (una feria, una presentación), dínoslo al pedir presupuesto y organizamos la producción para llegar.",
	},
	{
		question: "¿Hacéis también el diseño del catálogo?",
		answer:
			"Sí. Contamos con departamento de diseño y podemos maquetar el catálogo completo a partir de tus textos e imágenes, o adaptar una maqueta que ya tengas. En cualquier caso revisamos todos los archivos antes de imprimir para detectar problemas de resolución, sangres o color.",
	},
	{
		question: "¿Cómo tengo que preparar el archivo?",
		answer:
			"Un PDF en CMYK con 3 mm de sangre por cada lado, marcas de corte, imágenes a 300 ppp y las tipografías incrustadas o convertidas a curvas. Si trabajas con páginas enfrentadas, envíalas en páginas sueltas y nosotros montamos el pliego.",
	},
	{
		question: "¿Puedo ver una prueba antes de la tirada completa?",
		answer:
			"Sí, y lo recomendamos en cualquier catálogo con carga de imagen. Podemos entregar una prueba de color certificada o un ejemplar digital completo para que valides color, encuadernación y acabado antes de lanzar la producción.",
	},
	{
		question: "¿Imprimís catálogos con papel reciclado o certificado?",
		answer:
			"Sí. Trabajamos con papeles reciclados y con certificación FSC, y podemos usar tintas de base vegetal. Indícanoslo al pedir presupuesto y te proponemos las alternativas disponibles para el formato y gramaje que necesites.",
	},
];

const productSchema = buildProductSchema({
	name: "Impresión de catálogos",
	description: DESCRIPTION,
	slug: "/catalogo/catalogos",
	imagePath: IMAGE,
});

const serviceSchema = buildServiceSchema({
	name: "Impresión de catálogos",
	description:
		"Impresión de catálogos de productos en digital y offset, con encuadernación grapada, wire-o, cola PUR o cosida.",
	slug: "/catalogo/catalogos",
	imagePath: IMAGE,
});

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<JsonLd data={productSchema} />
			<JsonLd data={serviceSchema} />

			<SectionPrincipalBanner
				title="Catálogos"
				h1="Impresión de catálogos en Madrid"
				subtitle="Corta y larga tirada · Digital y offset"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				<Breadcrumbs className="mb-8" />

				<h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
					Catálogos de producto que se entienden y se guardan
				</h2>
				<p className="pt-4 text-base lg:text-lg">
					El catálogo sigue siendo la pieza que mejor explica una gama completa: se hojea sin prisa,
					se compara página con página y se queda encima de la mesa del cliente mucho después de la
					visita comercial. En Dinaprint imprimimos catálogos de producto, muestrarios técnicos,
					memorias corporativas y libros de temporada desde nuestra imprenta de Pinto, en el sur de
					Madrid.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Producimos tanto en <strong>impresión digital</strong>, para tiradas cortas y
					actualizaciones frecuentes de catálogo, como en <strong>offset</strong>, cuando el volumen
					justifica el ajuste de máquina y buscas el mejor coste por ejemplar. Te asesoramos sobre
					cuál conviene en tu caso concreto antes de dar el presupuesto: muchas veces la diferencia
					de precio entre 300 y 600 ejemplares es menor de lo que se espera.
				</p>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Catálogos en corta tirada
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					Si tu gama cambia cada temporada, imprimir miles de ejemplares es tirar dinero: acabas con
					cajas de catálogos obsoletos. La impresión digital permite producir desde 25 unidades con
					una calidad prácticamente indistinguible del offset, reimprimir en cuanto se agoten y
					corregir precios o referencias entre tirada y tirada sin coste de preparación.
				</p>
				<p className="pt-4 text-base lg:text-lg">
					Es la opción habitual para catálogos de feria, muestrarios de comercial, presentaciones a
					cliente y pruebas de mercado antes de lanzar una edición grande.
				</p>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Cómo elegir la encuadernación
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Grapa a caballete</h4>
						<p className="pt-2">
							Hasta unas 64 páginas, siempre en múltiplos de 4. Es la más económica, abre plana y
							funciona muy bien en catálogos de temporada y folletos extensos.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Fresado con cola PUR</h4>
						<p className="pt-2">
							A partir de 60-70 páginas. Da lomo impreso, aspecto de revista o libro y mucha
							durabilidad. La cola PUR aguanta mejor que la termofusible en papeles estucados.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Wire-o y espiral</h4>
						<p className="pt-2">
							Apertura de 360º y el catálogo se queda abierto sobre la mesa. Ideal para muestrarios
							técnicos, cartas de materiales y manuales de uso en taller o punto de venta.
						</p>
					</div>
					<div className="p-5 rounded-xl shadow-findBox bg-white">
						<h4 className="text-xl font-semibold">Cosido con hilo</h4>
						<p className="pt-2">
							La encuadernación más resistente y la de mejor apertura en catálogos gruesos. Se
							reserva para ediciones de imagen, libros corporativos y catálogos de larga vida.
						</p>
					</div>
				</div>

				<SpecTable
					title="Especificaciones técnicas"
					caption="Estas son las combinaciones que producimos habitualmente. Si necesitas un formato o un acabado que no aparece, consúltanos: casi todo es viable."
					rows={specRows}
				/>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Antes de enviarnos el archivo
				</h3>
				<p className="pt-4 text-base lg:text-lg">
					La mayoría de retrasos en un catálogo vienen del archivo, no de la máquina. Estos son los
					puntos que revisamos siempre y que conviene comprobar antes de mandarlo:
				</p>
				<ul className="list-disc pl-5 pt-4 space-y-2">
					<li>
						<strong>Sangre de 3 mm</strong> en todos los elementos que llegan al borde, y márgenes
						de seguridad de al menos 5 mm para textos y logotipos.
					</li>
					<li>
						<strong>Color en CMYK</strong>, no en RGB. Las fotos de catálogo en RGB cambian de tono
						al convertirse y los rojos y azules saturados son los que peor lo llevan.
					</li>
					<li>
						<strong>Imágenes a 300 ppp</strong> al tamaño final de colocación. Una foto de web
						ampliada a página completa se ve pixelada por muy bueno que sea el papel.
					</li>
					<li>
						<strong>Páginas sueltas</strong>, en orden y numeradas. Del montaje de pliegos nos
						encargamos nosotros.
					</li>
					<li>
						<strong>Tipografías incrustadas</strong> en el PDF o convertidas a curvas, para que no
						se sustituyan por otras en el RIP.
					</li>
				</ul>
				<p className="pt-4 text-base lg:text-lg">
					Lo tienes todo desarrollado en nuestras guías de{" "}
					<Link
						href="/blog/como-preparar-archivos-para-imprenta"
						className="text-primary underline"
					>
						cómo preparar archivos para imprenta
					</Link>{" "}
					y de{" "}
					<Link
						href="/blog/errores-comunes-enviar-archivos-imprenta"
						className="text-primary underline"
					>
						errores comunes al enviar archivos a imprenta
					</Link>
					.
				</p>

				<h3 className="text-xl lg:text-2xl font-semibold text-secondary pt-10">
					Productos relacionados
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
					<Link
						href="/catalogo/folletos-y-revistas"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Folletos y revistas</h4>
						<p className="text-sm pt-1">
							Mismas encuadernaciones, pensadas para publicaciones periódicas.
						</p>
					</Link>
					<Link
						href="/catalogo/papeleria-corporativa"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Papelería corporativa</h4>
						<p className="text-sm pt-1">
							Carpetas y tarjetas que acompañan al catálogo en la visita comercial.
						</p>
					</Link>
					<Link
						href="/catalogo/flyers-y-desplegables"
						className="p-4 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
					>
						<h4 className="font-semibold">Flyers y desplegables</h4>
						<p className="text-sm pt-1">
							La versión corta del catálogo para buzoneo y punto de venta.
						</p>
					</Link>
				</div>

				<FAQ items={faqItems} />
			</section>

			<KnowMore path={"/contacto"} copy={"PEDIR PRESUPUESTO"} />
		</main>
	);
}
