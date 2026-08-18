/**
 * ============================================================
 * SISTEMA DE BLOG OPTIMIZADO CON MDX
 * ============================================================
 *
 * Los artículos se almacenan en: /content/posts/*.mdx
 *
 * PARA AÑADIR UN NUEVO ARTÍCULO MANUALMENTE:
 * 1. Crea un nuevo archivo .mdx en /content/posts/
 * 2. Añade el frontmatter (título, descripción, etc.)
 * 3. Escribe el contenido en Markdown
 *
 * PARA INTEGRACIÓN CON N8N:
 * El workflow de n8n debe:
 *   1. Crear un archivo .mdx con el slug como nombre.
 *   2. Rellenar el frontmatter y el cuerpo del markdown.
 *   3. Hacer commit y push del nuevo archivo.
 * ============================================================
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	image: string;
	author: string;
	publishedAt: string;
	updatedAt?: string;
	category: string;
	tags: string[];
	readingTime: number;
	content: string;
}

export const BLOG_CATEGORIES = ["Guías", "Consejos", "Tendencias", "Casos de éxito"] as const;

/** Slug de URL para cada categoría, sin tildes ni espacios. */
export const CATEGORY_SLUGS: Record<string, string> = {
	Guías: "guias",
	Consejos: "consejos",
	Tendencias: "tendencias",
	"Casos de éxito": "casos-de-exito",
};

export function getCategorySlug(category: string): string {
	return (
		CATEGORY_SLUGS[category] ??
		category
			.normalize("NFD")
			.replace(/\p{Diacritic}/gu, "")
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/(^-|-$)/g, "")
	);
}

export function getCategoryBySlug(slug: string): string | undefined {
	return BLOG_CATEGORIES.find((category) => getCategorySlug(category) === slug);
}

const postsDirectory = path.join(process.cwd(), "content/posts");

/** Artículos por página en el listado del blog. */
export const POSTS_PER_PAGE = 12;

/** Velocidad de lectura media en castellano. */
const WORDS_PER_MINUTE = 200;

/**
 * Calcula el tiempo de lectura a partir del contenido real.
 *
 * No usar el `readingTime` del frontmatter: venía inflado (artículos de 177
 * palabras anunciando 8 minutos). Prometer al usuario más de lo que hay es
 * justo el patrón que penaliza el sistema de contenido útil.
 */
function calculateReadingTime(content: string): number {
	const words = content
		.replace(/```[\s\S]*?```/g, "")
		.replace(/[#*_>`\[\]()]/g, " ")
		.split(/\s+/)
		.filter(Boolean).length;

	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/**
 * Obtiene todos los posts ordenados por fecha (más recientes primero)
 */
export function getAllPosts(): BlogPost[] {
	if (!fs.existsSync(postsDirectory)) {
		return [];
	}

	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames
		.filter((fileName) => fileName.endsWith(".mdx"))
		.map((fileName) => {
			const slug = fileName.replace(/\.mdx$/, "");
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);

			return {
				slug,
				content,
				...(data as Omit<BlogPost, "slug" | "content">),
				readingTime: calculateReadingTime(content),
			} as BlogPost;
		});

	return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/**
 * Obtiene un post por su slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.mdx`);
		if (!fs.existsSync(fullPath)) return undefined;

		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			content,
			...(data as Omit<BlogPost, "slug" | "content">),
			readingTime: calculateReadingTime(content),
		} as BlogPost;
	} catch (error) {
		return undefined;
	}
}

/**
 * Obtiene posts por categoría
 */
export function getPostsByCategory(category: string): BlogPost[] {
	return getAllPosts().filter((post) => post.category === category);
}

/**
 * Obtiene posts relacionados (misma categoría, excluyendo el actual)
 */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
	const current = getPostBySlug(currentSlug);
	if (!current) return [];

	return getAllPosts()
		.filter((post) => post.slug !== currentSlug && post.category === current.category)
		.slice(0, limit);
}

/**
 * Obtiene todos los slugs (para generateStaticParams)
 */
export function getAllPostSlugs(): string[] {
	if (!fs.existsSync(postsDirectory)) return [];
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Genera el schema Article para un post
 */
export function getArticleSchema(post: BlogPost, url: string) {
	// Si el artículo lo firma una persona (y no la marca), se emite como Person:
	// para contenido de asesoramiento técnico, Google valora la experiencia
	// demostrable de alguien concreto. Basta con poner el nombre real en el
	// frontmatter `author` para que se active.
	const author =
		post.author && post.author !== SITE_NAME
			? { "@type": "Person", name: post.author }
			: { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: SITE_NAME };

	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		image: absoluteUrl(post.image),
		author,
		publisher: {
			"@type": "Organization",
			"@id": `${SITE_URL}#organization`,
			name: SITE_NAME,
			logo: {
				"@type": "ImageObject",
				url: absoluteUrl("/logo-dinaprint-final-02.png"),
			},
		},
		datePublished: post.publishedAt,
		dateModified: post.updatedAt || post.publishedAt,
		inLanguage: "es-ES",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
	};
}
