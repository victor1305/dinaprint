import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { buildServiceSchema, absoluteUrl, getLocalBusinessSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Impresión de carteles",
	description:
		"Impresión de carteles en Madrid (Pinto): distintos soportes (papel y rígidos), medidas y cantidades, con acabados como UVI, barnices y troquelado.",
	alternates: {
		canonical: "/catalogo/carteles",
	},
	openGraph: {
		type: "website",
		title: "Impresión de carteles",
		url: absoluteUrl("/catalogo/carteles"),
		description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
		images: [{ url: absoluteUrl("/carteles-01.jpg"), width: 1200, height: 630, alt: "Impresión de carteles - Dinaprint" }],
	},
	twitter: {
		title: "Impresión de carteles",
		description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
		images: [absoluteUrl("/carteles-01.jpg")],
	},
	keywords: [
		"imprimir carteles madrid",
		"cartelería",
		"imprenta pinto",
		"acabado uvi",
		"troquelado",
	],
};

const faqItems = [
	{
		question: "¿En qué materiales podéis imprimir carteles?",
		answer:
			"Imprimimos en papel estucado, cartulina, foam, PVC, metacrilato, Dibond, cartón pluma y lonas. Cada material tiene sus ventajas según el uso: interior, exterior, durabilidad, peso, etc.",
	},
	{
		question: "¿Qué tamaños de carteles ofrecéis?",
		answer:
			"Trabajamos desde A5 hasta formatos especiales de varios metros. Los más habituales son A3, A2, A1, A0 y 70×100 cm, pero podemos adaptarnos a cualquier medida.",
	},
	{
		question: "¿Los carteles son resistentes a la intemperie?",
		answer:
			"Depende del material. Para exterior recomendamos lonas, PVC o soportes rígidos con laminado protector. Te asesoramos sobre la mejor opción según dónde vayas a colocar el cartel.",
	},
	{
		question: "¿Ofrecéis servicio de instalación?",
		answer:
			"Sí, contamos con servicio de instalación de cartelería en Madrid. Consúltanos disponibilidad y presupuesto para tu ubicación.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Carteles",
	description: "Impresión de carteles en papel, rígidos y lonas con acabados profesionales.",
	slug: "/catalogo/carteles",
	imagePath: "/carteles-01.jpg",
});

export default async function Page() {
	const data = {
		title: "Carteles",
		product: "Carteles",
		subtitle: "Soluciones y servicios gráficos",
		image: "/carteles-01.jpg",
		text: [
			"Los carteles difunden información, anuncian eventos o promocionan productos. Su éxito depende del diseño y de la calidad de impresión. Podemos enriquecer cualquier cartel con acabados como troquelados, barnices UVI, laminados y más.",
			"Imprimimos en diferentes soportes: desde papel fotográfico hasta materiales rígidos como foam, PVC o Dibond. Cualquier medida y cantidad, adaptándonos a tus necesidades.",
			"Si prefieres lonas para exterior, también las fabricamos. Y si necesitas instalación, contamos con servicio propio en Madrid.",
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
