import { Contact } from "@/components/organisms";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contacto: imprenta en Pinto (Madrid)",
	description:
		"Contacta con nuestra imprenta en Pinto (Madrid, sur de Madrid) para presupuestos de impresión digital y offset, papelería corporativa, folletos, carteles y packaging.",
	alternates: {
		canonical: "/contacto",
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

export default async function Page() {
	return (
		<main>
			<Contact />
		</main>
	);
}
