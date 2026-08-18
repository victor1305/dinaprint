import { getOpeningHoursSchema } from "@/lib/hours";

export const SITE_NAME = "Dinaprint";
export const SITE_DOMAIN = "dinaprint.com";

// Fallback to production domain if env var is not set.
// Example: NEXT_PUBLIC_SITE_URL=https://dinaprint.com
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? `https://${SITE_DOMAIN}`).replace(
	/\/$/,
	"",
);

/** MID del Knowledge Graph de Google del perfil de empresa "Dinaprint SL". */
export const GOOGLE_KG_MID = "/g/11j79bn2w8";

/** Ficha de empresa en Google, construida a partir del MID. */
export const GOOGLE_BUSINESS_PROFILE_URL = `https://www.google.com/search?kgmid=${GOOGLE_KG_MID}`;

export const OG_IMAGE_PATH = "/slider-principal-dinaprint.jpg";

export const SITE_DESCRIPTION =
	"Imprenta en Madrid (Pinto, sur de Madrid) especializada en impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.";

export function getSiteUrl() {
	return SITE_URL;
}

export function absoluteUrl(pathname: string) {
	return new URL(pathname, getSiteUrl()).toString();
}

export function buildServiceSchema({
	name,
	description,
	slug,
	imagePath,
}: {
	name: string;
	description: string;
	slug: string;
	imagePath: string;
}) {
	const url = absoluteUrl(slug);

	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		serviceType: name,
		provider: {
			"@type": "LocalBusiness",
			"@id": `${SITE_URL}#provider`,
			name: SITE_NAME,
			image: absoluteUrl(OG_IMAGE_PATH),
			url: SITE_URL,
		},
		areaServed: [
			{ "@type": "AdministrativeArea", name: "Madrid" },
			{ "@type": "AdministrativeArea", name: "Sur de Madrid" },
		],
		image: absoluteUrl(imagePath),
		url,
	};
}

export function getLocalBusinessSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "PrintShop",
		"@id": `${SITE_URL}#localbusiness`,
		name: SITE_NAME,
		url: getSiteUrl(),
		image: absoluteUrl(OG_IMAGE_PATH),
		logo: absoluteUrl("/logo-dinaprint-final-02.png"),
		email: "dinaprint@dinaprint.com",
		telephone: "+34678519403",
		address: {
			"@type": "PostalAddress",
			streetAddress: "C/ Coto de Doñana, 9 Área Empresarial Andalucía",
			addressLocality: "Pinto",
			addressRegion: "Madrid",
			postalCode: "28320",
			addressCountry: "ES",
		},
		areaServed: [
			{ "@type": "AdministrativeArea", name: "Madrid" },
			{ "@type": "AdministrativeArea", name: "Sur de Madrid" },
		],
		geo: {
			"@type": "GeoCoordinates",
			latitude: 40.26497,
			longitude: -3.69852,
		},
		// Horario desde la fuente única en lib/hours.ts
		openingHoursSpecification: getOpeningHoursSchema(),
		description: SITE_DESCRIPTION,
		priceRange: "€€",
		// MID del Knowledge Graph de Google para "Dinaprint SL".
		identifier: GOOGLE_KG_MID,
		hasMap: GOOGLE_BUSINESS_PROFILE_URL,
		sameAs: [GOOGLE_BUSINESS_PROFILE_URL],
	};
}

export function buildProductSchema({
	name,
	description,
	slug,
	imagePath,
	lowPrice,
	highPrice,
}: {
	name: string;
	description: string;
	slug: string;
	imagePath: string;
	lowPrice?: number;
	highPrice?: number;
}) {
	const url = absoluteUrl(slug);

	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name,
		description,
		image: absoluteUrl(imagePath),
		url,
		brand: { "@type": "Brand", name: SITE_NAME },
		manufacturer: { "@type": "Organization", "@id": `${SITE_URL}#organization` },
		...(lowPrice
			? {
					offers: {
						"@type": "AggregateOffer",
						priceCurrency: "EUR",
						lowPrice,
						...(highPrice ? { highPrice } : {}),
						availability: "https://schema.org/InStock",
						seller: { "@type": "Organization", "@id": `${SITE_URL}#organization` },
						areaServed: { "@type": "Country", name: "ES" },
					},
				}
			: {}),
	};
}

export function getOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}#organization`,
		name: SITE_NAME,
		legalName: "Dinaprint S.L.",
		identifier: GOOGLE_KG_MID,
		sameAs: [GOOGLE_BUSINESS_PROFILE_URL],
		url: getSiteUrl(),
		logo: absoluteUrl("/logo-dinaprint-final-02.png"),
		email: "dinaprint@dinaprint.com",
		telephone: "+34678519403",
		address: {
			"@type": "PostalAddress",
			streetAddress: "C/ Coto de Doñana, 9 Área Empresarial Andalucía",
			addressLocality: "Pinto",
			addressRegion: "Madrid",
			postalCode: "28320",
			addressCountry: "ES",
		},
	};
}

export function getWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}#website`,
		name: SITE_NAME,
		url: getSiteUrl(),
		inLanguage: "es-ES",
		publisher: { "@id": `${SITE_URL}#organization` },
	};
}
