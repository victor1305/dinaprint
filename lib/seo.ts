import { getOpeningHoursSchema } from "@/lib/hours";

export const SITE_NAME = "Dinaprint";
export const SITE_DOMAIN = "dinaprint.com";

// Fallback al dominio de producción si la variable no está definida.
// Example: NEXT_PUBLIC_SITE_URL=https://dinaprint.com
//
// Se usa `||` y no `??` a propósito: en un build por Docker la variable puede
// llegar declarada pero vacía (un `--build-arg` sin valor la define como ""),
// y `??` dejaría SITE_URL en "" — con lo que `new URL()` revienta el build.
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL?.trim() || `https://${SITE_DOMAIN}`
).replace(/\/$/, "");

/** MID del Knowledge Graph de Google del perfil de empresa "Dinaprint SL". */
export const GOOGLE_KG_MID = "/g/11j79bn2w8";

/** Ficha de empresa en Google, construida a partir del MID. */
export const GOOGLE_BUSINESS_PROFILE_URL = `https://www.google.com/search?kgmid=${GOOGLE_KG_MID}`;

export const OG_IMAGE_PATH = "/slider-principal-dinaprint.jpg";

/** Medida real de los recortes que genera `scripts/generate-og.mjs`. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const OG_LOCALE = "es_ES";

/**
 * Next.js sustituye entero el bloque `openGraph` del layout cuando una página
 * declara el suyo: no hace merge profundo. Sin esparcir estos valores, todas las
 * páginas salen sin `og:site_name` ni `og:locale`.
 */
export const OG_DEFAULTS = {
	locale: OG_LOCALE,
	siteName: SITE_NAME,
} as const;

/** Ruta del recorte 1200x630 de una imagen de /public: /foo.jpg → /og/foo.jpg */
export function ogImagePath(path: string) {
	const file = path.split("/").pop() ?? "";
	return `/og/${file.replace(/\.[^.]+$/, "")}.jpg`;
}

/** Imagen lista para `openGraph.images`, con las medidas que de verdad tiene. */
export function ogImage(path: string, alt: string) {
	return {
		url: absoluteUrl(ogImagePath(path)),
		width: OG_IMAGE_WIDTH,
		height: OG_IMAGE_HEIGHT,
		alt,
	};
}

/** Misma imagen para `twitter.images`, que solo admite la URL. */
export function ogImageUrl(path: string) {
	return absoluteUrl(ogImagePath(path));
}

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
		// "PrintShop" no existe en schema.org (es una categoría de Google Business
		// Profile). El tipo válido es LocalBusiness; el matiz de imprenta se
		// expresa con additionalType apuntando a la entidad de Wikidata.
		"@type": "LocalBusiness",
		additionalType: "https://www.wikidata.org/wiki/Q6500733",
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

// Product solo es válido para Google si lleva "offers", "review" o "aggregateRating".
// Sin precios publicados en la página, un Product sin "offers" da error crítico en Search
// Console y no genera resultado enriquecido: usa buildServiceSchema en su lugar. Esta función
// solo debe usarse pasando lowPrice (y el precio visible también en el HTML de la página).
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
