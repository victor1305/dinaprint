import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Papelería corporativa: tarjetas, carpetas y material de empresa",
	description:
		"Papelería corporativa en Madrid (Pinto): tarjetas de visita, carpetas, cartas, catálogos y folletos con acabados profesionales.",
	alternates: {
		canonical: "/catalogo/papeleria-corporativa",
	},
	keywords: [
		"papelería corporativa",
		"tarjetas de visita madrid",
		"carpetas corporativas",
		"imprenta madrid",
		"imprenta pinto",
	],
};

const faqItems = [
	{
		question: "¿Qué gramaje recomendáis para tarjetas de visita?",
		answer:
			"Para tarjetas de visita profesionales recomendamos un gramaje mínimo de 300-350 g en estucado mate o brillo. Si buscas un tacto premium, puedes optar por papeles creativos o añadir acabados como plastificado soft-touch.",
	},
	{
		question: "¿Puedo imprimir pocas tarjetas de visita?",
		answer:
			"Sí, gracias a la impresión digital podemos producir desde 50 unidades. No hay cantidad mínima obligatoria, así que puedes pedir exactamente lo que necesitas.",
	},
	{
		question: "¿Qué acabados ofrecéis para papelería corporativa?",
		answer:
			"Ofrecemos plastificado mate, brillo y soft-touch, barniz UVI selectivo, stamping en oro/plata, troquelados especiales, relieve en seco y esquinas redondeadas, entre otros.",
	},
	{
		question: "¿Hacéis carpetas con bolsillo?",
		answer:
			"Sí, fabricamos carpetas corporativas con uno o dos bolsillos, con o sin ranura para tarjeta. Personalizamos medidas, solapas y acabados según tus necesidades.",
	},
];

// Schema Product para SEO
const productSchema = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: "Papelería corporativa",
	description:
		"Tarjetas de visita, carpetas, cartas, sobres y catálogos con acabados profesionales.",
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
		title: "Papelería corporativa",
		product: "Papelería corporativa",
		subtitle: "Soluciones y servicios gráficos",
		image: "/papeleria-corporativa-01.jpg",
		text: [
			"La comunicación impresa de cualquier negocio o empresa transmite su identidad y provoca sensaciones y opiniones. Para ello se utilizan tanto tarjetas como carpetas, cartas, catálogos, folletos y sobres.",
			"Todos los elementos deben transmitir uniformidad y el mismo estilo gráfico, creando una sensación de seguridad y profesionalidad. Una imagen corporativa coherente genera confianza en clientes y colaboradores.",
			"La <b>herramienta más utilizada es la tarjeta de visita</b>, fundamental en la creación de relaciones nuevas. Normalmente se entrega a un contacto que puede representar a un cliente potencial.",
			"Actualmente hay miles de estilos y soportes que aportan originalidad y buen gusto: papeles creativos, acabados especiales, troqueles, relieves y stamping. Te asesoramos para encontrar la opción perfecta para tu marca.",
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
