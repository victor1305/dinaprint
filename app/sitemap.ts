import { absoluteUrl } from '@/lib/seo';

import type { MetadataRoute } from 'next';

const routes = [
  '/',
  '/catalogo',
  '/catalogo/papeleria-corporativa',
  '/catalogo/flyers-y-desplegables',
  '/catalogo/folletos-y-revistas',
  '/catalogo/calendarios',
  '/catalogo/roll-up',
  '/catalogo/expositores',
  '/catalogo/cajas-y-packaging',
  '/catalogo/regalo-promocional',
  '/catalogo/carteles',
  '/servicios',
  '/sobre-nosotros',
  '/contacto'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((pathname) => {
    const priority = pathname === '/' ? 1 : pathname.startsWith('/catalogo/') ? 0.85 : 0.8;

    return {
      url: absoluteUrl(pathname),
      lastModified,
      changeFrequency: 'weekly',
      priority
    };
  });
}
