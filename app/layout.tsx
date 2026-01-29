import { Montserrat } from "next/font/google";

import { OG_IMAGE_PATH, SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/seo";

import { Footer, Header } from "@/components/molecules";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL(getSiteUrl()),
	title: {
		default: "Imprenta en Madrid (Pinto, sur de Madrid)",
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	applicationName: SITE_NAME,
	alternates: {
		languages: {
			"es-ES": "/",
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "es_ES",
		siteName: SITE_NAME,
		images: [
			{
				url: OG_IMAGE_PATH,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [OG_IMAGE_PATH],
	},
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "PrintShop",
	name: SITE_NAME,
	url: getSiteUrl(),
	image: new URL(OG_IMAGE_PATH, getSiteUrl()).toString(),
	logo: new URL("/logo-dinaprint-final-02.png", getSiteUrl()).toString(),
	email: "dinaprint@dinaprint.com",
	telephone: "+34 678 519 403",
	address: {
		"@type": "PostalAddress",
		streetAddress: "C/ Coto de Doñana, 9 Área Empresarial Andalucía",
		addressLocality: "Pinto",
		addressRegion: "Madrid",
		postalCode: "28320",
		addressCountry: "ES",
	},
	areaServed: [
		{
			"@type": "AdministrativeArea",
			name: "Madrid",
		},
		{
			"@type": "AdministrativeArea",
			name: "Sur de Madrid",
		},
	],
	description: SITE_DESCRIPTION,
	priceRange: "€€",
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="es">
			<head>
				<script
					defer
					data-domain="dinaprint.com"
					src="https://analytics.vicdev.com.es/js/script.js"
				/>
			</head>
			<body className={`${montserrat.className} text-font-primary`}>
				<script id="local-business-schema" type="application/ld+json" suppressHydrationWarning>
					{JSON.stringify(localBusinessSchema)}
				</script>
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
