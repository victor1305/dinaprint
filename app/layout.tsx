import { Montserrat } from "next/font/google";

import {
	OG_DEFAULTS,
	OG_IMAGE_PATH,
	SITE_DESCRIPTION,
	SITE_NAME,
	getSiteUrl,
	ogImage,
	ogImageUrl,
} from "@/lib/seo";

import { WhatsAppButton } from "@/components/atoms";
import { Footer, Header } from "@/components/molecules";

import type { Metadata, Viewport } from "next";
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
		...OG_DEFAULTS,
		type: "website",
		title: SITE_NAME,
		url: new URL(getSiteUrl()).toString(),
		images: [ogImage(OG_IMAGE_PATH, SITE_NAME)],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_NAME,
		images: [ogImageUrl(OG_IMAGE_PATH)],
	},
};

export const viewport: Viewport = {
	// Tiñe la barra del navegador en móvil con el naranja de marca.
	themeColor: "#ff6b00",
	colorScheme: "light",
};

// localBusiness schema moved to `lib/seo.ts` via `getLocalBusinessSchema()`

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
				{/* localBusiness schema moved to pages to avoid duplicate JSON-LD concatenation by crawlers */}
				<Header />
				<div>{children}</div>
				<Footer />
				<WhatsAppButton />
			</body>
		</html>
	);
}
