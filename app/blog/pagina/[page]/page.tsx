import Link from "next/link";
import { notFound } from "next/navigation";

import { POSTS_PER_PAGE, getAllPosts, getCategoriesWithPosts } from "@/lib/blog";
import { OG_DEFAULTS, absoluteUrl, getLocalBusinessSchema, ogImage, ogImageUrl } from "@/lib/seo";

import { Breadcrumbs, JsonLd, Pagination, SectionPrincipalBanner } from "@/components/atoms";
import { PostGrid } from "@/components/molecules";

import type { Metadata } from "next";

interface PageProps {
	params: { page: string };
}

function totalPages() {
	return Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
}

export function generateStaticParams() {
	// La página 1 vive en /blog, así que aquí solo generamos de la 2 en adelante.
	return Array.from({ length: Math.max(0, totalPages() - 1) }, (_, i) => ({
		page: String(i + 2),
	}));
}

export function generateMetadata({ params }: PageProps): Metadata {
	const page = Number(params.page);
	const title = `Blog de imprenta — página ${page}`;
	const description = `Página ${page} del blog de Dinaprint: guías y consejos sobre impresión digital y offset, papeles, acabados, encuadernación y packaging.`;

	return {
		title,
		description,
		// Canonical propio: nunca apuntar las paginadas a /blog, se perderían del índice.
		alternates: { canonical: `/blog/pagina/${page}` },
		openGraph: {
			...OG_DEFAULTS,
			type: "website",
			title,
			description,
			url: absoluteUrl(`/blog/pagina/${page}`),
			images: [ogImage("/slider-principal-dinaprint.jpg", `Blog de Dinaprint — página ${page}`)],
		},
		twitter: {
			title,
			description,
			images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
		},
	};
}

export default function BlogPaginatedPage({ params }: PageProps) {
	const page = Number(params.page);
	const posts = getAllPosts();
	const total = totalPages();

	if (!Number.isInteger(page) || page < 2 || page > total) notFound();

	const start = (page - 1) * POSTS_PER_PAGE;
	const shown = posts.slice(start, start + POSTS_PER_PAGE);

	return (
		<main>
			<JsonLd data={getLocalBusinessSchema()} />

			<SectionPrincipalBanner
				title="Blog"
				h1={`Blog de imprenta — página ${page}`}
				subtitle="Guías, consejos y tendencias"
			/>

			<section className="px-5 py-10 mx-auto max-w-[1200px]">
				<Breadcrumbs
					items={[
						{ name: "Inicio", href: "/" },
						{ name: "Blog", href: "/blog" },
						{ name: `Página ${page}`, href: `/blog/pagina/${page}` },
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
					{getCategoriesWithPosts().map(({ category, slug }) => (
						<Link
							key={category}
							href={`/blog/categoria/${slug}`}
							className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
						>
							{category}
						</Link>
					))}
				</div>

				{/* Frase propia de cada paginada: sin ella, la página es el mismo
				    listado de tarjetas que /blog y que las categorías, y Google
				    agrupa las tres vistas como duplicadas. */}
				<p className="text-lg text-gray-600 max-w-3xl mb-10">
					Artículos del {start + 1} al {start + shown.length} de los {posts.length} publicados en el
					blog, del más reciente al más antiguo.
				</p>

				<PostGrid posts={shown} />
				<Pagination currentPage={page} totalPages={total} basePath="/blog" />
			</section>
		</main>
	);
}
