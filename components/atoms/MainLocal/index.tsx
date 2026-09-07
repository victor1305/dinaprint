import Link from "next/link";

/**
 * Municipios con entrega propia desde el taller de Pinto.
 *
 * Es una lista de *cercanía*, no de alcance: se produce para toda España y el
 * envío va incluido en la mayoría de pedidos. Redactar el bloque como "damos
 * servicio en estos municipios" cerraría la puerta al cliente de fuera de
 * Madrid, que es buena parte de la cartera.
 */
const NEARBY_TOWNS = [
	"Pinto",
	"Valdemoro",
	"Getafe",
	"Parla",
	"Ciempozuelos",
	"San Martín de la Vega",
	"Fuenlabrada",
	"Leganés",
	"Alcorcón",
	"Móstoles",
	"Madrid capital",
];

/**
 * Bloque de cercanía de la home.
 *
 * Las páginas de zona (`/imprenta-pinto`, `/imprenta-sur-de-madrid`,
 * `/imprenta-madrid`) solo recibían enlaces desde el pie, y se notaba: la de
 * Pinto rondaba la posición 28 para "imprenta pinto" mientras la propia home
 * ocupaba la 16. Aquí reciben enlace contextual desde la página con más
 * autoridad del sitio, con el texto ancla que toca.
 */
const MainLocal = () => (
	<section className="px-5 mx-auto max-w-[1200px]">
		<h2 className="text-3xl text-secondary font-semibold pb-5 text-center">
			IMPRENTA EN MADRID, ENVÍOS A TODA ESPAÑA
		</h2>
		<p className="text-base lg:text-lg text-center max-w-[800px] mx-auto">
			Producimos en nuestro taller de Pinto, en el Área Empresarial Andalucía, y{" "}
			<strong>enviamos a toda la península con el envío incluido en la mayoría de pedidos</strong>.
			Trabajamos con empresas de cualquier punto de España: nos mandas el archivo, lo revisamos en
			preimpresión y te lo servimos donde lo necesites.
		</p>
		<p className="pt-4 text-base lg:text-lg text-center max-w-[800px] mx-auto">
			Si además estás cerca, ganas cosas que no se pueden mandar por mensajería: ver y tocar el
			papel antes de decidir, revisar una prueba impresa en vez de fiarte de la pantalla y recoger
			el pedido el mismo día que sale de máquina cuando vas justo de plazo.
		</p>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
			<Link
				href="/imprenta-pinto"
				className="p-6 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
			>
				<h3 className="text-xl font-semibold text-secondary">Imprenta en Pinto</h3>
				<p className="pt-2 text-gray-700">
					Recogida en taller sin coste y trabajos urgentes en 24 h. Estamos en la calle Coto de
					Doñana, 9.
				</p>
				<span className="inline-block pt-3 text-primary font-medium underline underline-offset-2">
					Ver la imprenta de Pinto
				</span>
			</Link>
			<Link
				href="/imprenta-sur-de-madrid"
				className="p-6 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
			>
				<h3 className="text-xl font-semibold text-secondary">Imprenta en el sur de Madrid</h3>
				<p className="pt-2 text-gray-700">
					Entrega en Valdemoro, Getafe, Parla, Fuenlabrada y el resto del corredor sur.
				</p>
				<span className="inline-block pt-3 text-primary font-medium underline underline-offset-2">
					Ver cobertura en el sur
				</span>
			</Link>
			<Link
				href="/imprenta-madrid"
				className="p-6 rounded-xl shadow-findBox bg-white hover:shadow-lg transition-shadow"
			>
				<h3 className="text-xl font-semibold text-secondary">Imprenta en Madrid</h3>
				<p className="pt-2 text-gray-700">
					A 20 km del centro por la A-4, con envío a toda la península incluido en la mayoría de
					pedidos.
				</p>
				<span className="inline-block pt-3 text-primary font-medium underline underline-offset-2">
					Ver servicio en Madrid
				</span>
			</Link>
		</div>

		<p className="pt-8 text-center text-gray-600">
			<span className="font-semibold">Entrega propia en:</span> {NEARBY_TOWNS.join(" · ")}.{" "}
			<span className="font-semibold text-secondary">
				Al resto de España enviamos por mensajería, con el envío incluido en la mayoría de pedidos.
			</span>
		</p>
	</section>
);

export default MainLocal;
