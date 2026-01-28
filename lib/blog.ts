/**
 * ============================================================
 * SISTEMA DE BLOG OPTIMIZADO PARA INTEGRACIÓN CON N8N
 * ============================================================
 *
 * Los artículos se almacenan en: /content/posts.json
 *
 * PARA AÑADIR UN NUEVO ARTÍCULO MANUALMENTE:
 * 1. Abre /content/posts.json
 * 2. Añade un nuevo objeto al array "posts"
 * 3. Ejecuta: npm run build (o despliega en Vercel)
 *
 * PARA INTEGRACIÓN CON N8N:
 * El workflow de n8n debe:
 *   1. Leer el archivo posts.json actual (GET del repo o filesystem)
 *   2. Añadir el nuevo post al array "posts"
 *   3. Hacer commit y push al repositorio (GitHub)
 *   4. Vercel detectará el cambio y desplegará automáticamente
 *
 * ESTRUCTURA DE UN POST (para n8n):
 * {
 *   "slug": "url-del-articulo",           // Único, sin espacios, minúsculas
 *   "title": "Título del artículo",
 *   "description": "Meta description (150-160 chars)",
 *   "image": "/imagen.jpg",               // Debe existir en /public
 *   "author": "Dinaprint",
 *   "publishedAt": "2026-01-28",          // YYYY-MM-DD
 *   "category": "Guías",                  // Guías | Consejos | Tendencias | Casos de éxito
 *   "tags": ["tag1", "tag2"],
 *   "readingTime": 6,
 *   "content": [
 *     { "type": "paragraph", "text": "..." },
 *     { "type": "heading", "level": 2, "text": "..." },
 *     { "type": "list", "items": ["item1", "item2"] },
 *     { "type": "quote", "text": "..." }
 *   ]
 * }
 * ============================================================
 */

import postsData from '@/content/posts.json';

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
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'quote';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  level?: 2 | 3;
}

export const BLOG_CATEGORIES = [
  'Guías',
  'Consejos',
  'Tendencias',
  'Casos de éxito'
] as const;

// Cargar posts desde el JSON
const BLOG_POSTS: BlogPost[] = postsData.posts as BlogPost[];

/**
 * Obtiene todos los posts ordenados por fecha (más recientes primero)
 */
export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Obtiene un post por su slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
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
  return BLOG_POSTS.map((post) => post.slug);
}

/**
 * Genera el schema Article para un post
 */
export function getArticleSchema(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://dinaprint.com${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dinaprint',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dinaprint.com/logo-dinaprint-final-02.png'
      }
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}
