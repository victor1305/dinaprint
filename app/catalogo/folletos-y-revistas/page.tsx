import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Impresión de folletos y revistas",
	description:
		"Impresión de folletos y revistas en Madrid (Pinto): encuadernación (wire-o, hilo, cola PUR), plastificados y troquelados. Digital u offset según tirada.",
	alternates: {
		canonical: "/catalogo/folletos-y-revistas",
	},
	keywords: [
		"imprimir folletos madrid",
		"impresión revistas madrid",
		"encuadernación pur",
		"wire-o",
		"imprenta pinto",
	],
};

const faqItems = [
	{
		question: "¿Qué tipos de encuadernación ofrecéis?",
		answer:
			"Ofrecemos encuadernación grapada, wire-o (espiral metálica), cosido con hilo, fresado con cola PUR y encuadernación rústica. Cada tipo tiene sus ventajas según el uso y número de páginas.",
	},
	{
		question: "¿Cuál es el número mínimo de páginas para un folleto?",
		answer:
			"Un folleto grapado necesita mínimo 8 páginas (múltiplos de 4). Para encuadernaciones fresadas recomendamos a partir de 48 páginas para que el lomo quede bien definido.",
	},
	{
		question: "¿Puedo mezclar papeles en una misma revista?",
		answer:
			"Sí, es habitual usar un papel más grueso para la cubierta (250-300 g) y otro más ligero para el interior (90-150 g). También puedes incluir encartes en papel especial.",
	},
	{
		question: "¿Qué plazo de entrega tenéis para revistas?",
		answer:
			"Depende de la cantidad y el tipo de encuadernación. Para tiradas digitales pequeñas, podemos entregar en 3-5 días laborables. Trabajos offset o con acabados especiales suelen requerir 7-10 días.",
	},
];

const productSchema = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: "Folletos y revistas",
	description:
		"Impresión de folletos y revistas con encuadernación wire-o, hilo, cola PUR, plastificados y troquelados.",
	brand: {
		"@type": "Brand",
		name: "Dinaprint",
	},
	offers: {
		"@type": "Offer",
		priceCurrency: "EUR",
		availability: "https://schema.org/InStock",
		seller: {
			"@type": "Organization",
			name: "Dinaprint",
		},
	},
};

export default async function Page() {
	const data = {
		title: "Folletos y revistas",
		product: "Folletos y revistas",
		subtitle: "Soluciones y servicios gráficos",
		image: "/Folletos-y-revistas-001.jpg",
		text: [
			"Impresos a todo color en varios tipos de encuadernaciones: grapado, wire-o, hilo y cola PUR. Ofrecemos una amplia variedad de papeles en diferentes gramajes y acabados como plastificados de todo tipo y troquelados.",
			"Cada proyecto es diferente: desde un folleto informativo de 8 páginas hasta una revista corporativa de 100 páginas. Te asesoramos para elegir el formato, papel y encuadernación más adecuados.",
		],
		list: [
			"Impresión digital o en offset según tirada.",
			"Revistas promocionales para comercios y ayuntamientos.",
			"Folletos informativos y catálogos de producto.",
			"Revistas corporativas y memorias anuales.",
			"Folletos para ferias, exposiciones y eventos.",
		],
	};
	return (
		<main>
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(productSchema)}
			</script>
			<Product {...data} />
			<section className="px-5 pb-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		</main>
	);
}
