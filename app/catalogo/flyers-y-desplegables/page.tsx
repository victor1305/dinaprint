import { FAQ } from "@/components/atoms";
import { Product } from "@/components/organisms";
import { buildServiceSchema } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Impresión de flyers y desplegables",
	description:
		"Impresión de flyers y desplegables en Madrid (Pinto): distintos tamaños, papeles y acabados para buzoneo, promociones y puntos de venta.",
	alternates: {
		canonical: "/catalogo/flyers-y-desplegables",
	},
	keywords: [
		"imprimir flyers madrid",
		"desplegables imprenta",
		"buzoneo",
		"imprenta pinto",
		"impresión digital madrid",
	],
};

const faqItems = [
	{
		question: "¿Qué tamaños de flyers son los más habituales?",
		answer:
			"Los formatos más demandados son A5, A6, DL (10×21 cm) y A4. También hacemos tamaños personalizados según tus necesidades de diseño y distribución.",
	},
	{
		question: "¿Qué papel recomendáis para flyers?",
		answer:
			"Para flyers estándar recomendamos estucado brillo o mate de 135-170 g. Si buscas más resistencia o un tacto premium, puedes optar por 250-300 g con plastificado.",
	},
	{
		question: "¿Hacéis desplegables con varios pliegues?",
		answer:
			"Sí, fabricamos dípticos, trípticos, cuadrípticos y plegados especiales (ventana, acordeón, envolvente). Te asesoramos sobre el plegado más adecuado para tu contenido.",
	},
	{
		question: "¿Puedo encargar pocas unidades?",
		answer:
			"Sí, con impresión digital no hay cantidad mínima. Puedes pedir desde 50 o 100 unidades para probar una campaña antes de hacer tiradas mayores.",
	},
];

const serviceSchema = buildServiceSchema({
	name: "Flyers y desplegables",
	description: "Impresión de flyers y desplegables para buzoneo, promociones y puntos de venta.",
	slug: "/catalogo/flyers-y-desplegables",
	imagePath: "/flyer-001.jpg",
});

export default async function Page() {
	const data = {
		title: "Flyers y desplegables",
		product: "Flyers y desplegables",
		subtitle: "Soluciones y servicios gráficos",
		image: "/flyer-001.jpg",
		text: [
			"Los flyers y desplegables son una herramienta de marketing directa y económica. Se utilizan para comunicar las principales características de un producto, servicio o evento.",
			"Dependiendo del mensaje, puedes elegir entre distintos tamaños, número de caras, tipos de papel y acabados. Desde un flyer sencillo a un desplegable con múltiples pliegues y acabados especiales.",
			"Una de sus grandes ventajas es la versatilidad: sirven para buzoneo, reparto en mano, promociones en punto de venta o como complemento en mailings.",
		],
		list: [
			"Publicidad a domicilio mediante buzoneo responsable.",
			"Entrega en mano en zonas de alto tráfico.",
			"Promociones en puntos de venta y eventos.",
			"Dípticos, trípticos y plegados especiales.",
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
