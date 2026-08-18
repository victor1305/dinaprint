import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
	BLOG_CATEGORIES,
	getCategoryBySlug,
	getCategorySlug,
	getPostsByCategory,
} from "@/lib/blog";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema } from "@/lib/seo";

import { Breadcrumbs, JsonLd, SectionPrincipalBanner } from "@/components/atoms";

import type { Metadata } from "next";

interface PageProps {
	params: { slug: string };
}

export function generateStaticParams() {
	return BLOG_CATEGORIES.map((category) => ({ slug: getCategorySlug(category) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
	const category = getCategoryBySlug(params.slug);

	if (!category) return { title: "Categoría no encontrada" };

	const title = `${category} de imprenta e impresión`;
	const description = `Artículos de la categoría ${category}: impresión digital y offset, papeles, acabados, encuadernación y packaging, explicados por nuestra imprenta en Madrid.`;

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
		},
		twitter: { title, description },
	};
}

export default function CategoryPage({ params }: PageProps) {
	const category = getCategoryBySlug(params.slug);

	if (!category) notFound();

	const posts = getPostsByCategory(category);

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
					{BLOG_CATEGORIES.map((item) => (
						<Link
							key={item}
							href={`/blog/categoria/${getCategorySlug(item)}`}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								item === category
									? "bg-primary text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{item}
						</Link>
					))}
				</div>

				{posts.length > 0 ? (
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
				) : (
					<p className="text-gray-500 text-lg py-10">
						Todavía no hay artículos publicados en esta categoría.
					</p>
				)}
			</section>
		</main>
	);
}
