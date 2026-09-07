import Link from "next/link";

import type { RelatedService } from "@/lib/related-service";

interface ServiceCalloutProps {
	service: RelatedService;
	/**
	 * `inline` va dentro del artículo, justo antes del cuerpo: es el enlace que
	 * de verdad recoge al lector que ha llegado por una búsqueda informacional.
	 * `cta` cierra el artículo con el mismo destino y más peso visual.
	 */
	variant?: "inline" | "cta";
}

/**
 * Enlace destacado del artículo hacia su ficha de catálogo.
 *
 * Existe para corregir lo que se veía en Search Console: los artículos
 * capturaban las impresiones y las fichas comerciales se quedaban sin tráfico
 * ni enlaces contextuales. Ver `lib/related-service.ts`.
 */
const ServiceCallout = ({ service, variant = "inline" }: ServiceCalloutProps) => {
	if (variant === "cta") {
		return (
			<div className="bg-primary/10 rounded-xl p-6 md:p-8 mt-10 text-center">
				<h3 className="text-xl font-bold text-gray-900 mb-3">
					¿Necesitas imprimir {service.label.toLowerCase()}?
				</h3>
				<p className="text-gray-600 mb-5">
					{service.copy} Cuéntanos qué necesitas y te preparamos un presupuesto sin compromiso.
				</p>
				<div className="flex flex-wrap gap-3 justify-center">
					<Link
						href={service.href}
						className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
					>
						Ver {service.label.toLowerCase()}
					</Link>
					<Link
						href="/contacto"
						className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
					>
						Pedir presupuesto
					</Link>
				</div>
			</div>
		);
	}

	return (
		<aside className="border-l-4 border-secondary bg-secondary/5 rounded-r-lg px-5 py-4 mb-10">
			<p className="text-gray-700">
				<strong className="text-secondary">{service.label} en Pinto (Madrid).</strong>{" "}
				{service.copy}{" "}
				<Link
					href={service.href}
					className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors"
				>
					Ver {service.label.toLowerCase()} y pedir presupuesto
				</Link>
				.
			</p>
		</aside>
	);
};

export default ServiceCallout;
