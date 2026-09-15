"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { catalogOptions, relatedProducts } from "@/lib/constants";

type CatalogOptionData = (typeof catalogOptions)[number];

/**
 * Fichas relacionadas al pie de cada ficha de catálogo.
 *
 * Las fichas que pinta `Product` no se enlazaban entre sí: el rastreo de
 * septiembre de 2026 contó 3 páginas enlazando desde contenido a cartas y
 * menús y 5 a calendarios. Igual que `Breadcrumbs`, resuelve la ficha por la
 * URL, así que no hace falta pasar nada desde cada página: basta con darla de
 * alta en `relatedProducts`.
 */
const RelatedProducts = () => {
	const pathname = usePathname();
	const items = (relatedProducts[pathname] ?? [])
		.map((path) => catalogOptions.find((option) => option.path === path))
		.filter((option): option is CatalogOptionData => Boolean(option));

	if (items.length === 0) return null;

	return (
		<section className="px-5 py-10 mx-auto max-w-[1200px]">
			<h2 className="text-2xl lg:text-3xl font-semibold text-secondary">Productos relacionados</h2>
			<ul className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-5 pt-6">
				{items.map((item) => (
					<li key={item.path}>
						<Link href={item.path} className="group block">
							<div className="relative aspect-[4/3] overflow-hidden rounded-xl">
								<Image
									src={item.image}
									alt={`${item.title} - imprenta Dinaprint`}
									fill
									sizes="(max-width: 480px) 100vw, 33vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
								/>
							</div>
							<h3 className="mt-3 font-medium text-center group-hover:text-secondary group-hover:underline">
								{item.title}
							</h3>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default RelatedProducts;
