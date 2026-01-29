import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllPosts, getArticleSchema, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

import { Breadcrumbs } from "@/components/atoms";

import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return { title: "Artículo no encontrado" };
	}

	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: `/blog/${post.slug}`,
		},
		keywords: post.tags,
		openGraph: {
			type: "article",
			title: post.title,
			description: post.description,
			images: [{ url: post.image }],
			publishedTime: post.publishedAt,
			modifiedTime: post.updatedAt || post.publishedAt,
			authors: [post.author],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [post.image],
		},
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const relatedPosts = getRelatedPosts(slug);
	const articleSchema = getArticleSchema(post, absoluteUrl(`/blog/${slug}`));

	return (
		<main className="bg-gray-50">
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(articleSchema)}
			</script>

			{/* Hero del artículo */}
			<div className="relative h-[300px] md:h-[400px] w-full">
				<Image src={post.image} alt={post.title} fill className="object-cover" priority />
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
				<div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 max-w-[900px] mx-auto">
					<span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
						{post.category}
					</span>
					<h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
				</div>
			</div>

			<article className="px-5 py-10 mx-auto max-w-[800px]">
				<Breadcrumbs
					items={[
						{ name: "Inicio", href: "/" },
						{ name: "Blog", href: "/blog" },
						{ name: post.title, href: `/blog/${post.slug}` },
					]}
					className="mb-8"
				/>

				{/* Meta del artículo */}
				<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
					<span className="flex items-center gap-1">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<title>Autor</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						{post.author}
					</span>
					<span className="flex items-center gap-1">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<title>Fecha de publicación</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<time dateTime={post.publishedAt}>
							{new Date(post.publishedAt).toLocaleDateString("es-ES", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</time>
					</span>
					<span className="flex items-center gap-1">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<title>Tiempo de lectura</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						{post.readingTime} min de lectura
					</span>
				</div>

				{/* Contenido del artículo */}
				<div className="prose prose-lg max-w-none">
					{post.content.map((block) => {
						const contentKey = `${block.type}-${block.text || block.src || block.items?.join("-") || "content"}`;
						switch (block.type) {
							case "paragraph":
								return (
									<p key={contentKey} className="text-gray-700 leading-relaxed mb-6">
										{block.text}
									</p>
								);
							case "heading": {
								const level = block.level || 2;
								if (level === 3) {
									return (
										<h3 key={contentKey} className="font-bold text-gray-900 mt-10 mb-4 text-xl">
											{block.text}
										</h3>
									);
								}
								return (
									<h2 key={contentKey} className="font-bold text-gray-900 mt-10 mb-4 text-2xl">
										{block.text}
									</h2>
								);
							}
							case "list":
								return (
									<ul
										key={contentKey}
										className="list-disc list-inside space-y-2 mb-6 text-gray-700"
									>
										{block.items?.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								);
							case "quote":
								return (
									<blockquote
										key={contentKey}
										className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg italic text-gray-700"
									>
										{block.text}
									</blockquote>
								);
							case "image":
								return (
									<figure key={contentKey} className="my-8">
										<Image
											src={block.src || ""}
											alt={block.alt || ""}
											width={800}
											height={450}
											className="rounded-lg"
										/>
										{block.alt && (
											<figcaption className="text-center text-sm text-gray-500 mt-2">
												{block.alt}
											</figcaption>
										)}
									</figure>
								);
							default:
								return null;
						}
					})}
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-200">
					{post.tags.map((tag) => (
						<span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
							#{tag}
						</span>
					))}
				</div>

				{/* CTA */}
				<div className="bg-primary/10 rounded-xl p-6 md:p-8 mt-10 text-center">
					<h3 className="text-xl font-bold text-gray-900 mb-3">
						¿Necesitas ayuda con tu proyecto de impresión?
					</h3>
					<p className="text-gray-600 mb-5">
						Contacta con nosotros y te asesoramos sin compromiso.
					</p>
					<Link
						href="/contacto"
						className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
					>
						Solicitar presupuesto
					</Link>
				</div>
			</article>

			{/* Artículos relacionados */}
			{relatedPosts.length > 0 && (
				<section className="px-5 py-10 bg-white">
					<div className="max-w-[1200px] mx-auto">
						<h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
						<div className="grid md:grid-cols-3 gap-6">
							{relatedPosts.map((relatedPost) => (
								<article
									key={relatedPost.slug}
									className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
								>
									<Link href={`/blog/${relatedPost.slug}`} className="block">
										<div className="relative h-40 w-full">
											<Image
												src={relatedPost.image}
												alt={relatedPost.title}
												fill
												className="object-cover"
											/>
										</div>
										<div className="p-4">
											<h3 className="font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors">
												{relatedPost.title}
											</h3>
										</div>
									</Link>
								</article>
							))}
						</div>
					</div>
				</section>
			)}
		</main>
	);
}
