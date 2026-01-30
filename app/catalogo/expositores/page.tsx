import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { buildServiceSchema, absoluteUrl } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expositores para punto de venta",
	description:
		"Expositores para punto de venta en Madrid (Pinto): soluciones para retail con medidas y acabados personalizados.",
	alternates: {
		canonical: "/catalogo/expositores",
	},
	openGraph: {
		type: "website",
		title: "Expositores para punto de venta",
		url: absoluteUrl("/catalogo/expositores"),
		description:
			"Expositores personalizados para retail, ferias y puntos de venta. Múltiples materiales y acabados.",
		images: [{ url: absoluteUrl("/stand-001.jpg"), width: 1200, height: 630, alt: "Expositores - Dinaprint" }],
	},
	twitter: {
		title: "Expositores para punto de venta",
		images: [absoluteUrl("/stand-001.jpg")],
	},
	keywords: [
		"expositores punto de venta",
		"expositores madrid",
		"PLV",
		"imprenta pinto",
		"acabados personalizados",
	],
};

const faqItems = [
	{
		question: "¿Qué tipos de expositores fabricáis?",
		answer:
			"Fabricamos expositores de suelo, de mostrador, con baldas, giratorios, troquelados y personalizados según las necesidades del punto de venta.",
	},
	{
		question: "¿En qué materiales se pueden hacer?",
		answer:
			"Trabajamos con cartón, cartón pluma, PVC, metacrilato, madera y estructuras metálicas. El material depende del peso del producto y la durabilidad requerida.",
	},
	{
		question: "¿Diseñáis el expositor a medida?",
		answer:
			"Sí, podemos diseñar desde cero o adaptar un modelo existente a tus productos. Te enviamos maqueta digital y prototipo para aprobación.",
	},
	{
		question: "¿Cuál es la cantidad mínima de pedido?",
		answer:
			"Podemos fabricar desde una unidad para prototipos. Para tiradas mayores ofrecemos mejores precios unitarios.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Expositores para punto de venta",
	description:
		"Expositores personalizados para retail, ferias y puntos de venta. Múltiples materiales y acabados.",
	slug: "/catalogo/expositores",
	imagePath: "/stand-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Expositores",
		product: "Expositores",
		subtitle: "Soluciones y servicios gráficos",
		image: "/stand-001.jpg",
		text: [
			"Los expositores aprovechan al máximo el punto de venta: el producto sale al encuentro del cliente y capta su atención de forma directa.",
			"Se utilizan en centros comerciales, supermercados, farmacias y tiendas especializadas. Se convierten en un punto de venta cercano al comprador.",
			"Fabricamos expositores en distintos materiales y admiten acabados y medidas de todo tipo, adaptándose a la imagen de tu marca.",
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
