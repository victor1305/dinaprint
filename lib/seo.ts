export const SITE_NAME = "Dinaprint";
export const SITE_DOMAIN = "dinaprint.com";

// Fallback to production domain if env var is not set.
// Example: NEXT_PUBLIC_SITE_URL=https://dinaprint.com
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? `https://${SITE_DOMAIN}`).replace(
	/\/$/,
	"",
);

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
		name: SITE_NAME,
		url: getSiteUrl(),
		image: absoluteUrl(OG_IMAGE_PATH),
		logo: absoluteUrl("/logo-dinaprint-final-02.png"),
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
			{ "@type": "AdministrativeArea", name: "Madrid" },
			{ "@type": "AdministrativeArea", name: "Sur de Madrid" },
		],
		description: SITE_DESCRIPTION,
		priceRange: "€€",
	};
}
