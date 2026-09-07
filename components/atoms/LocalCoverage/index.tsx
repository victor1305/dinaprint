import Link from "next/link";

interface LocalCoverageProps {
	/** Producto de la ficha, en minúscula y plural: "roll ups", "carteles". */
	product: string;
}

/**
 * Cobertura local de una ficha de catálogo.
 *
 * Las páginas de catálogo competían por términos nacionales ("papelería
 * corporativa", "impresión de catálogos") donde el sitio no tiene autoridad:
 * 3.551 impresiones y 5 clics en el trimestre, con posición media 44. El
 * término ganable es el local, y para eso la ficha tiene que decir dónde
 * imprime y enlazar a las páginas de zona, que hasta ahora solo recibían
 * enlaces desde el pie.
 *
 * Ojo al redactarlo: la cercanía es un *argumento añadido*, no el alcance del
 * negocio. Se produce para toda España, así que el bloque abre con el envío
 * nacional y deja los municipios como lo que son, entrega propia.
 */
const LocalCoverage = ({ product }: LocalCoverageProps) => (
	<section className="px-5 pt-10 mx-auto max-w-[1200px]">
		<div className="rounded-xl bg-secondary/5 border border-secondary/20 p-6 md:p-8">
			<h2 className="text-xl lg:text-2xl font-semibold text-secondary">
				Imprimimos {product} en Madrid y enviamos a toda España
			</h2>
			<p className="pt-4 text-base lg:text-lg text-gray-700">
				Producimos en nuestro taller de la calle Coto de Doñana, 9 (Área Empresarial Andalucía,
				Pinto), y servimos a empresas de cualquier punto del país: nos envías el archivo, lo
				revisamos en preimpresión y te lo mandamos donde lo necesites, con el envío incluido en la
				mayoría de pedidos.
			</p>
			<ul className="list-disc pl-5 pt-4 space-y-2 text-gray-700">
				<li>
					<strong>Toda la península:</strong> envío incluido en la mayoría de pedidos. Para
					Baleares, Canarias o fuera de España, consúltanos.
				</li>
				<li>
					<strong>Recogida en taller</strong> sin coste, en Pinto, de lunes a viernes.
				</li>
				<li>
					<strong>Entrega propia en el corredor sur:</strong> Valdemoro, Getafe, Parla,
					Ciempozuelos, San Martín de la Vega, Fuenlabrada y Leganés.
				</li>
				<li>
					<strong>Madrid capital</strong> a 20 km por la A-4.
				</li>
			</ul>
			<p className="pt-4 text-base lg:text-lg text-gray-700">
				Si estás cerca, además puedes venir a ver muestras de papel y acabados antes de decidir,
				revisar una prueba impresa en vez de fiarte de la pantalla y recoger el pedido el mismo día
				que sale de máquina si vas justo de plazo.
			</p>
			<p className="pt-4 text-gray-700">
				Más detalle en nuestras páginas de{" "}
				<Link href="/imprenta-pinto" className="text-primary underline underline-offset-2">
					imprenta en Pinto
				</Link>
				,{" "}
				<Link href="/imprenta-sur-de-madrid" className="text-primary underline underline-offset-2">
					imprenta en el sur de Madrid
				</Link>{" "}
				e{" "}
				<Link href="/imprenta-madrid" className="text-primary underline underline-offset-2">
					imprenta en Madrid
				</Link>
				.
			</p>
		</div>
	</section>
);

export default LocalCoverage;
