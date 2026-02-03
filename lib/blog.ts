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

const postsDirectory = path.join(process.cwd(), "content/posts");

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
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		image: `https://dinaprint.com${post.image}`,
		author: {
			"@type": "Organization",
			name: post.author,
		},
		publisher: {
			"@type": "Organization",
			name: "Dinaprint",
			logo: {
				"@type": "ImageObject",
				url: "https://dinaprint.com/logo-dinaprint-final-02.png",
			},
		},
		datePublished: post.publishedAt,
		dateModified: post.updatedAt || post.publishedAt,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
	};
}
