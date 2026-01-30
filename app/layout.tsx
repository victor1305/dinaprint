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
		title: SITE_NAME,
		url: new URL(getSiteUrl()).toString(),
		images: [
			{
				url: OG_IMAGE_PATH,
				width: 1200,
				height: 630,
				alt: SITE_NAME,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_NAME,
		images: [OG_IMAGE_PATH],
	},
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
			</body>
		</html>
	);
}
