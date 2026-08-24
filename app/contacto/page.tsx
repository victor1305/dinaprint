import { Contact } from "@/components/organisms";
import { formatBusinessHours } from "@/lib/hours";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { JsonLd } from "@/components/atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contacto: imprenta en Pinto (Madrid)",
	description:
		"Contacta con nuestra imprenta en Pinto (Madrid, sur de Madrid) para presupuestos de impresión digital y offset, papelería corporativa, folletos, carteles y packaging.",
	alternates: {
		canonical: "/contacto",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Contacto: imprenta en Pinto (Madrid)",
		url: absoluteUrl("/contacto"),
		description:
			"Contacta con nuestra imprenta en Pinto (Madrid, sur de Madrid) para presupuestos de impresión digital y offset, papelería corporativa, folletos, carteles y packaging.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Contacto Dinaprint")],
	},
	twitter: {
		title: "Contacto: imprenta en Pinto (Madrid)",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"contacto imprenta",
		"imprenta pinto",
		"imprenta madrid sur",
		"presupuesto imprenta",
		"impresión digital madrid",
		"impresión offset madrid",
	],
};

/** Preguntas logísticas de la página de contacto; `FAQ` emite el `FAQPage`. */
const faqItems = [
	{
		question: "¿Qué información necesitáis para darme un presupuesto?",
		answer:
			"Producto, formato o medidas, cantidad, número de páginas si las tiene, tipo de papel si ya lo tienes decidido y los acabados que quieras. Si no lo tienes claro, escríbenos igualmente lo que sepas y te orientamos nosotros.",
	},
	{
		question: "¿Por qué vías puedo contactar?",
		answer:
			"Por el formulario de esta página, por teléfono en el 678 519 403 y el 678 519 404, o por correo a dinaprint@dinaprint.com. Contestamos por el mismo canal por el que nos escribas.",
	},
	{
		question: "¿Cuál es el horario de atención?",
		// Derivado de `lib/hours.ts`: el horario no se escribe a mano en ningún sitio.
		answer: `${formatBusinessHours(" y ")}. Fuera de ese horario puedes dejar la petición por formulario o correo y la vemos al abrir.`,
	},
	{
		question: "¿Puedo pasar por el taller?",
		answer:
			"Sí. Estamos en la calle Coto de Doñana, 9, en el Área Empresarial Andalucía (28320 Pinto, Madrid), con acceso directo desde la A-4. También puedes recoger allí el pedido: te avisamos cuando esté listo.",
	},
	{
		question: "¿Trabajáis con clientes de fuera de Madrid?",
		answer:
			"Sí. Buena parte del trabajo se gestiona a distancia y enviamos a toda la península sin coste adicional, así que no hace falta que estés cerca de Pinto para encargar.",
	},
];

export default async function Page() {
	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<Contact faqItems={faqItems} />
		</main>
	);
}
