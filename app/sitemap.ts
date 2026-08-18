import { BLOG_CATEGORIES, getAllPosts, getCategorySlug } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

import type { MetadataRoute } from "next";

/**
 * Fecha real de última edición de cada página estática (YYYY-MM-DD).
 *
 * No usar `new Date()`: si todas las páginas dicen haberse modificado en cada
 * despliegue, Google detecta el patrón y deja de fiarse del `lastmod` de todo
 * el sitio, incluido el de los artículos, que sí es correcto.
 *
 * Al editar una página de verdad, actualiza aquí su fecha.
 */
const ROUTE_LAST_MODIFIED: Record<string, string> = {
	"/": "2026-08-18",
	"/imprenta-madrid": "2026-08-18",
	"/imprenta-sur-de-madrid": "2026-08-18",
	"/imprenta-pinto": "2026-08-18",
	"/blog": "2026-08-18",
	"/catalogo": "2026-08-18",
	"/catalogo/catalogos": "2026-08-18",
	"/catalogo/papeleria-corporativa": "2026-08-18",
	"/catalogo/flyers-y-desplegables": "2026-08-18",
	"/catalogo/folletos-y-revistas": "2026-08-18",
	"/catalogo/calendarios": "2026-08-18",
	"/catalogo/roll-up": "2026-08-18",
	"/catalogo/expositores": "2026-08-18",
	"/catalogo/cajas-y-packaging": "2026-08-18",
	"/catalogo/regalo-promocional": "2026-08-18",
	"/catalogo/carteles": "2026-08-18",
	"/servicios": "2026-08-18",
	"/sobre-nosotros": "2026-01-27",
	"/contacto": "2026-01-27",
};

export default function sitemap(): MetadataRoute.Sitemap {
	// Páginas estáticas. Sin `changeFrequency` ni `priority`: Google los ignora.
	const staticPages = Object.entries(ROUTE_LAST_MODIFIED).map(([pathname, lastModified]) => ({
		url: absoluteUrl(pathname),
		lastModified: new Date(lastModified),
	}));

	// Categorías del blog
	const categories = BLOG_CATEGORIES.map((category) => ({
		url: absoluteUrl(`/blog/categoria/${getCategorySlug(category)}`),
		lastModified: new Date("2026-08-18"),
	}));

	// Artículos del blog
	const blogPosts = getAllPosts().map((post) => ({
		url: absoluteUrl(`/blog/${post.slug}`),
		lastModified: new Date(post.updatedAt || post.publishedAt),
	}));

	return [...staticPages, ...categories, ...blogPosts];
}
