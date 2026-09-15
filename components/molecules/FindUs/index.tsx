import { findBoxes } from "@/lib/constants";
import { GOOGLE_REVIEW_URL } from "@/lib/seo";

import { FindBox } from "@/components/atoms";

/**
 * Bloque de ubicación de /contacto y /imprenta-pinto. La invitación a reseñar va
 * aquí porque son las dos páginas a las que llega quien ya conoce el taller, y
 * las reseñas son lo que más pesa para salir en el mapa: en la misma dirección
 * está Gráficas Aries, con 35.
 *
 * Rejilla de 1, 2 o 4 columnas según el ancho; las cajas se estiran a la misma
 * altura aunque la dirección y el horario ocupen más líneas que el resto.
 */
const FindUs = () => (
	<div>
		<h2 className="text-3xl text-secondary text-center font-medium">ENCUÉNTRANOS EN</h2>
		<div className="mt-10 mx-auto grid max-w-[440px] grid-cols-1 gap-5 px-5 sm:max-w-[760px] sm:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4">
			{findBoxes.map((elm) => (
				<FindBox key={elm.title} {...elm} />
			))}
		</div>
		<p className="mt-8 px-5 text-center text-base lg:text-lg">
			¿Ya has trabajado con nosotros?{" "}
			<a
				href={GOOGLE_REVIEW_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="font-semibold text-primary underline"
			>
				Déjanos una reseña en Google
			</a>
		</p>
	</div>
);

export default FindUs;
