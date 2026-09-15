import type React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaRegEnvelope } from "react-icons/fa";

interface FindBoxProps {
	title: string;
	subtitle: string;
	/** Enlace opcional bajo el texto (p. ej. la ruta en Google Maps). */
	href?: string;
	linkLabel?: string;
}

/**
 * Sin ancho ni alto fijos: el reparto lo hace la rejilla de `FindUs`. Con
 * `w-[300px]` y `h-[252px]` cabían tres cajas en los 960 px del contenedor, y
 * desde que se añadió la de horario la cuarta se salía de la pantalla en
 * escritorio.
 */
const FindBox: React.FC<FindBoxProps> = ({ title, subtitle, href, linkLabel }: FindBoxProps) => {
	// "678 519 404 | 678 519 403": cada número va entero en su línea si no caben
	// los dos, en lugar de partirse por la mitad en las cuatro columnas.
	const parts = subtitle.split(" | ");

	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center px-6 py-8 text-center shadow-findBox rounded-l-[70px] !rounded-t-[15px] !rounded-r-[15px]">
			<div className="mb-4 text-primary flex justify-center text-[50px]">
				{title === "Teléfono" && <FaPhoneAlt />}
				{title === "Email" && <FaRegEnvelope />}
				{title === "Ubicación" && <FaMapMarkerAlt />}
				{title === "Horario" && <FaRegClock />}
			</div>
			<h3 className="pb-2.5">{title}</h3>
			<p className="break-words [text-wrap:balance]">
				{parts.length === 1
					? subtitle
					: parts.map((part, index) => (
							<span key={part}>
								{index > 0 && " | "}
								<span className="whitespace-nowrap">{part}</span>
							</span>
						))}
			</p>
			{href && linkLabel && (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block pt-2.5 font-semibold text-primary hover:underline"
				>
					{linkLabel}
				</a>
			)}
		</div>
	);
};

export default FindBox;
