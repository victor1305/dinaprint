import Image from 'next/image';
import Link from 'next/link';

import { getAllPosts, BLOG_CATEGORIES } from '@/lib/blog';

import { Breadcrumbs, SectionPrincipalBanner } from '@/components/atoms';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de imprenta: guías, consejos y tendencias',
  description:
    'Blog sobre impresión, diseño gráfico y artes gráficas. Guías para preparar archivos, elegir papel, acabados de impresión y tendencias de packaging.',
  alternates: {
    canonical: '/blog'
  },
  keywords: [
    'blog imprenta',
    'guía impresión',
    'preparar archivos imprenta',
    'tipos de papel',
    'acabados impresión',
    'diseño gráfico'
  ]
};

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog de Dinaprint',
  description:
    'Artículos sobre impresión, diseño gráfico y artes gráficas.',
  url: 'https://dinaprint.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Dinaprint',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dinaprint.com/logo-dinaprint-final-02.png'
    }
  }
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <SectionPrincipalBanner title="Blog" subtitle="Guías, consejos y tendencias" />

      <section className="px-5 py-10 mx-auto max-w-[1200px]">
        <Breadcrumbs className="mb-8" />

        <div className="mb-10">
          <p className="text-lg text-gray-600 max-w-3xl">
            Descubre nuestras guías sobre impresión, consejos para preparar tus
            archivos y las últimas tendencias en diseño gráfico y packaging.
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/blog"
            className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Todos
          </Link>
          {BLOG_CATEGORIES.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Grid de artículos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-findBox overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readingTime} min de lectura</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Próximamente publicaremos artículos en nuestro blog.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
