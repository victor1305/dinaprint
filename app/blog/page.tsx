import Link from "next/link";

import { BLOG_CATEGORIES, POSTS_PER_PAGE, getAllPosts, getCategorySlug } from "@/lib/blog";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { Breadcrumbs, JsonLd, Pagination, SectionPrincipalBanner } from "@/components/atoms";
import { PostGrid } from "@/components/molecules";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog de imprenta: guías, consejos y tendencias",
	description:
		"Blog sobre impresión, diseño gráfico y artes gráficas. Guías para preparar archivos, elegir papel, acabados de impresión y tendencias de packaging.",
	alternates: {
		canonical: "/blog",
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Blog de imprenta: guías, consejos y tendencias",
		url: absoluteUrl("/blog"),
		description:
			"Blog sobre impresión, diseño gráfico y artes gráficas. Guías para preparar archivos, elegir papel, acabados de impresión y tendencias de packaging.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Blog Dinaprint")],
	},
	twitter: {
		title: "Blog de imprenta: guías, consejos y tendencias",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
	keywords: [
		"blog imprenta",
		"guía impresión",
		"preparar archivos imprenta",
		"tipos de papel",
		"acabados impresión",
		"diseño gráfico",
	],
};

const blogListSchema = {
	"@context": "https://schema.org",
	"@type": "Blog",
	name: "Blog de Dinaprint",
	description: "Artículos sobre impresión, diseño gráfico y artes gráficas.",
	url: absoluteUrl("/blog"),
	inLanguage: "es-ES",
	publisher: {
		"@type": "Organization",
		name: "Dinaprint",
		logo: {
			"@type": "ImageObject",
			url: absoluteUrl("/logo-dinaprint-final-02.png"),
		},
	},
};

export default function BlogPage() {
	const posts = getAllPosts();
	const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />
			<JsonLd data={blogListSchema} />

			<SectionPrincipalBanner
				title="Blog"
				h1="Blog de imprenta: guías y consejos de impresión"
				subtitle="Guías, consejos y tendencias"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				<Breadcrumbs className="mb-8" />

				<div className="mb-10">
					<p className="text-lg text-gray-600 max-w-3xl">
						Descubre nuestras guías sobre impresión, consejos para preparar tus archivos y las
						últimas tendencias en diseño gráfico y packaging.
					</p>
				</div>

				<div className="flex flex-wrap gap-3 mb-10">
					<span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
						Todos
					</span>
					{BLOG_CATEGORIES.map((category) => (
						<Link
							key={category}
							href={`/blog/categoria/${getCategorySlug(category)}`}
							className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
						>
							{category}
						</Link>
					))}
				</div>

				{posts.length > 0 ? (
					<>
						<PostGrid posts={posts.slice(0, POSTS_PER_PAGE)} />
						<Pagination currentPage={1} totalPages={totalPages} basePath="/blog" />
					</>
				) : (
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
