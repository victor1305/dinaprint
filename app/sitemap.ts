import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

import type { MetadataRoute } from "next";

const routes = [
	"/",
	"/imprenta-madrid",
	"/imprenta-sur-de-madrid",
	"/imprenta-pinto",
	"/blog",
	"/catalogo",
	"/catalogo/papeleria-corporativa",
	"/catalogo/flyers-y-desplegables",
	"/catalogo/folletos-y-revistas",
	"/catalogo/calendarios",
	"/catalogo/roll-up",
	"/catalogo/expositores",
	"/catalogo/cajas-y-packaging",
	"/catalogo/regalo-promocional",
	"/catalogo/carteles",
	"/servicios",
	"/sobre-nosotros",
	"/contacto",
	"/aviso-legal",
	"/politica-de-privacidad",
	"/politica-de-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	// Páginas estáticas
	const staticPages = routes.map((pathname) => {
		let priority = 0.8;
		if (pathname === "/") priority = 1;
		else if (pathname.startsWith("/catalogo/")) priority = 0.85;
		else if (pathname.startsWith("/blog")) priority = 0.9;
		else if (pathname.startsWith("/imprenta-")) priority = 0.9;
		else if (pathname.startsWith("/aviso") || pathname.startsWith("/politica")) priority = 0.3;

		return {
			url: absoluteUrl(pathname),
			lastModified,
			changeFrequency: "weekly" as const,
			priority,
		};
	});

	// Páginas del blog
	const blogPosts = getAllPosts().map((post) => ({
		url: absoluteUrl(`/blog/${post.slug}`),
		lastModified: new Date(post.updatedAt || post.publishedAt),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticPages, ...blogPosts];
}
