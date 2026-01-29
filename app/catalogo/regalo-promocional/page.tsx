import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Regalo promocional personalizado",
	description:
		"Regalo promocional personalizado en Madrid (Pinto): soluciones para promociones, puntos de venta y acciones comerciales desde tiradas cortas.",
	alternates: {
		canonical: "/catalogo/regalo-promocional",
	},
	keywords: [
		"regalo promocional",
		"merchandising personalizado",
		"promociones",
		"imprenta madrid",
		"imprenta pinto",
	],
};

const faqItems = [
	{
		question: "¿Qué tipo de regalos promocionales podéis personalizar?",
		answer:
			"Personalizamos bolígrafos, libretas, tazas, bolsas, USB, camisetas, paraguas, llaveros, power banks y muchísimo más. Trabajamos con catálogos de miles de productos.",
	},
	{
		question: "¿Cuál es la cantidad mínima de pedido?",
		answer:
			"Dependiendo del producto, podemos hacer tiradas desde 5 unidades. Te asesoramos sobre las opciones más económicas según la cantidad que necesites.",
	},
	{
		question: "¿Cómo se personaliza el regalo?",
		answer:
			"Según el producto: serigrafía, tampografía, grabado láser, bordado, impresión digital UV, sublimación, etc. Elegimos la técnica que mejor reproduce tu logo.",
	},
	{
		question: "¿Hacéis kits o packs promocionales?",
		answer:
			"Sí, preparamos kits personalizados con varios productos, cajas de regalo y embalaje a medida para eventos, bienvenidas de empleados o campañas especiales.",
	},
];

const productSchema = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: "Regalo promocional personalizado",
	description: "Merchandising y regalos promocionales personalizados para empresas y eventos.",
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
		title: "Regalo promocional",
		product: "Regalo promocional",
		subtitle: "Soluciones y servicios gráficos",
		image: "/regalo-promocional-01.jpg",
		text: [
			"El regalo promocional es una excelente forma de crear empatía con el cliente. Un detalle bien elegido refuerza la imagen de marca y fideliza.",
			"Ofrecemos un amplio catálogo de productos: bolígrafos, libretas, textil, tecnología, bolsas ecológicas, artículos de oficina y mucho más.",
			"Ideal para puntos de venta, visitas comerciales, ferias, eventos corporativos o promociones. Desde 5 unidades en adelante.",
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
