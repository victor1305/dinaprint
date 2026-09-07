import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
	CATEGORY_COPY,
	getCategoriesWithPosts,
	getCategoryBySlug,
	getPostsByCategory,
} from "@/lib/blog";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { Breadcrumbs, JsonLd, SectionPrincipalBanner } from "@/components/atoms";

import type { Metadata } from "next";

interface PageProps {
	params: { slug: string };
}

/**
 * Solo existen las categorías con artículos. Cualquier otro slug responde 404
 * en vez de renderizarse bajo demanda: una categoría vacía no tiene contenido
 * propio que indexar.
 */
export const dynamicParams = false;

export function generateStaticParams() {
	return getCategoriesWithPosts().map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
	const category = getCategoryBySlug(params.slug);

	if (!category) return { title: "Categoría no encontrada" };

	const title = `${category} de imprenta e impresión`;
	const description =
		CATEGORY_COPY[category]?.description ??
		`Artículos de la categoría ${category}, explicados por nuestra imprenta en Madrid.`;

	return {
		title,
		description,
		alternates: { canonical: `/blog/categoria/${params.slug}` },
		openGraph: {
			...OG_DEFAULTS,
			type: "website",
			title,
			description,
			url: absoluteUrl(`/blog/categoria/${params.slug}`),
			images: [ogImage("/slider-principal-dinaprint.jpg", `${category} — blog de Dinaprint`)],
		},
		twitter: {
			title,
			description,
			images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
		},
	};
}

export default function CategoryPage({ params }: PageProps) {
	const category = getCategoryBySlug(params.slug);

	if (!category) notFound();

	const posts = getPostsByCategory(category);

	// Una categoría sin artículos no llega a publicarse: ni página, ni enlace,
	// ni entrada en el sitemap.
	if (posts.length === 0) notFound();

	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />

			<SectionPrincipalBanner
				title={category}
				h1={`${category} de imprenta e impresión`}
				subtitle="Blog de Dinaprint"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				<Breadcrumbs
					items={[
						{ name: "Inicio", href: "/" },
						{ name: "Blog", href: "/blog" },
						{ name: category, href: `/blog/categoria/${params.slug}` },
					]}
					className="mb-8"
				/>

				<div className="flex flex-wrap gap-3 mb-10">
					<Link
						href="/blog"
						className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
					>
						Todos
					</Link>
					{getCategoriesWithPosts().map((item) => (
						<Link
							key={item.category}
							href={`/blog/categoria/${item.slug}`}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								item.category === category
									? "bg-primary text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{item.category}
						</Link>
					))}
				</div>

				<p className="text-lg text-gray-600 max-w-3xl mb-10">{CATEGORY_COPY[category]?.intro}</p>

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
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover"
									/>
								</div>
								<div className="p-5">
									<h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
										{post.title}
									</h2>
									<p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.description}</p>
									<div className="flex items-center justify-between text-xs text-gray-500">
										<span>{post.readingTime} min de lectura</span>
										<time dateTime={post.publishedAt}>
											{new Date(post.publishedAt).toLocaleDateString("es-ES", {
												day: "numeric",
												month: "short",
												year: "numeric",
											})}
										</time>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
