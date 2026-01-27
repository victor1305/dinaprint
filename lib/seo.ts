export const SITE_NAME = 'Dinaprint';
export const SITE_DOMAIN = 'dinaprint.com';

// Fallback to production domain if env var is not set.
// Example: NEXT_PUBLIC_SITE_URL=https://dinaprint.com
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${SITE_DOMAIN}`
).replace(/\/$/, '');

export const OG_IMAGE_PATH = '/slider-principal-dinaprint.jpg';

export const SITE_DESCRIPTION =
  'Imprenta en Madrid (Pinto, sur de Madrid) especializada en impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.';

export function getSiteUrl() {
  return SITE_URL;
}

export function absoluteUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}
