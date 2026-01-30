import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { buildServiceSchema, absoluteUrl, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Roll up: impresión y montaje para ferias y eventos",
	description:
		"Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.",
	alternates: {
		canonical: "/catalogo/roll-up",
	},
	openGraph: {
		type: "website",
		title: "Roll up: impresión y montaje para ferias y eventos",
		url: absoluteUrl("/catalogo/roll-up"),
		description: "Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.",
		images: [{ url: absoluteUrl("/rollup-001.jpg"), width: 1200, height: 630, alt: "Roll up - Dinaprint" }],
	},
	twitter: {
		title: "Roll up: impresión y montaje para ferias y eventos",
		images: [absoluteUrl("/rollup-001.jpg")],
	},
	keywords: [
		"roll up madrid",
		"imprimir roll up",
		"roll up ferias",
		"imprenta pinto",
		"impresión gran formato",
	],
};

const faqItems = [
	{
		question: "¿Qué medidas de roll up tenéis disponibles?",
		answer:
			"Las medidas más habituales son 85×200 cm, 100×200 cm, 120×200 cm y 150×200 cm. También fabricamos tamaños especiales bajo pedido.",
	},
	{
		question: "¿El roll up incluye estructura?",
		answer:
			"Sí, todos nuestros roll ups incluyen el mecanismo enrollable de aluminio, la gráfica impresa a todo color y la bolsa de transporte. Listos para usar.",
	},
	{
		question: "¿Cuánto dura la gráfica de un roll up?",
		answer:
			"La impresión mantiene su calidad durante años si se guarda correctamente. Para uso intensivo en exterior, recomendamos laminado protector.",
	},
	{
		question: "¿Puedo cambiar la gráfica de mi roll up?",
		answer:
			"Sí, si conservas la estructura en buen estado, podemos imprimir una nueva gráfica a medida para reutilizar el mecanismo.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Roll up",
	description:
		"Roll ups enrollables con gráfica a todo color, ideales para ferias, eventos y puntos de venta.",
	slug: "/catalogo/roll-up",
	imagePath: "/rollup-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Roll up",
		product: "Roll up",
		subtitle: "Soluciones y servicios gráficos",
		image: "/rollup-001.jpg",
		text: [
			"Los roll ups son soportes publicitarios ligeros y fáciles de transportar. Se despliegan en segundos y ofrecen una imagen profesional en cualquier evento, feria o punto de venta.",
			"Imprimimos a todo color con acabado de alta calidad. La estructura de aluminio es resistente y elegante, e incluye bolsa de transporte.",
			"Disponibles en varios tamaños estándar y personalizado. Son ideales para promocionar productos, servicios o lanzamientos.",
		],
	};
	return (
		<main>
			{/* Schema del negocio */}
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(getLocalBusinessSchema())}
			</script>
			
			{/* Schema del servicio */}
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
