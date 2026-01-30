import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { buildServiceSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cajas y packaging personalizados",
	description:
		"Cajas y packaging personalizados en Madrid (Pinto): impresión de calidad, acabados y tiradas cortas con impresión digital.",
	alternates: {
		canonical: "/catalogo/cajas-y-packaging",
	},
	keywords: [
		"packaging madrid",
		"cajas personalizadas",
		"imprimir cajas",
		"imprenta pinto",
		"acabados packaging",
	],
};

const faqItems = [
	{
		question: "¿Puedo encargar pocas cajas personalizadas?",
		answer:
			"Sí, gracias a la impresión digital podemos producir tiradas cortas sin incremento de precio por cantidad. Ideal para lanzar nuevos productos o ediciones limitadas.",
	},
	{
		question: "¿Qué acabados ofrecéis en packaging?",
		answer:
			"Ofrecemos plastificado mate o brillo, barniz UVI, stamping en oro/plata, troquelado de formas especiales y relieves. Consulta con nuestro equipo para opciones premium.",
	},
	{
		question: "¿Puedo traer mi propio diseño?",
		answer:
			"Por supuesto. Aceptamos archivos en PDF, AI o PSD. También podemos diseñar el packaging si lo necesitas, adaptándolo a la imagen de tu marca.",
	},
	{
		question: "¿Cuánto tiempo tardáis en producir cajas?",
		answer:
			"El plazo estándar es de 5-7 días laborables tras aprobar la prueba. Para proyectos urgentes, pregunta por nuestro servicio express.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Cajas y packaging personalizados",
	description: "Packaging personalizado: cajas, estuches y envoltorios con acabados premium.",
	slug: "/catalogo/cajas-y-packaging",
	imagePath: "/packing-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Cajas y packaging",
		product: "Cajas y packaging",
		subtitle: "Soluciones y servicios gráficos",
		image: "/packing-01.jpg",
		text: [
			"Un buen packaging debe identificar al producto de manera positiva e inducir a la compra, transmitiendo confianza y calidad. Además, el producto tiene que estar protegido y ser fácil de utilizar y apilar en el punto de venta.",
			"Con las nuevas técnicas de impresión digital podemos hacer cantidades mínimas con todo tipo de acabados: troquelado, barniz UVI, plastificados, stamping y más.",
			"Diseñamos y fabricamos cajas, estuches, bolsas y envoltorios adaptados a tu marca. Una buena presentación e impresión convence y fideliza al cliente.",
		],
	};
	return (
		<main>
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(serviceSchema)}
			</script>
			<Product {...data} />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
