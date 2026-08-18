import Link from "next/link";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	/** Ruta de la página 1. El resto cuelga de `${basePath}/pagina/N`. */
	basePath: string;
}

function hrefFor(basePath: string, page: number) {
	return page === 1 ? basePath : `${basePath}/pagina/${page}`;
}

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	const linkBase =
		"px-4 py-2 rounded-full text-sm font-medium transition-colors border border-gray-200";

	return (
		<nav aria-label="Paginación del blog" className="flex flex-wrap items-center gap-2 mt-12">
			{currentPage > 1 && (
				<Link
					href={hrefFor(basePath, currentPage - 1)}
					rel="prev"
					className={`${linkBase} bg-white text-gray-700 hover:bg-gray-100`}
				>
					← Anterior
				</Link>
			)}

			{pages.map((page) =>
				page === currentPage ? (
					<span
						key={page}
						aria-current="page"
						className={`${linkBase} bg-primary text-white border-primary`}
					>
						{page}
					</span>
				) : (
					<Link
						key={page}
						href={hrefFor(basePath, page)}
						className={`${linkBase} bg-white text-gray-700 hover:bg-gray-100`}
					>
						{page}
					</Link>
				),
			)}

			{currentPage < totalPages && (
				<Link
					href={hrefFor(basePath, currentPage + 1)}
					rel="next"
					className={`${linkBase} bg-white text-gray-700 hover:bg-gray-100`}
				>
					Siguiente →
				</Link>
			)}
		</nav>
	);
};

export default Pagination;
