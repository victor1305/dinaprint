import { catalogOptions } from "@/lib/constants";

import {
	CatalogOption,
	FAQ,
	type FAQItem,
	KnowMore,
	SectionPrincipalBanner,
} from "@/components/atoms";

interface CatalogProps {
	faqItems?: FAQItem[];
	/** Párrafo de entrada sobre la rejilla; sin él la página era poco más que títulos de ficha. */
	intro?: string;
}

/**
 * La FAQ llega desde la página (donde vive el resto del contenido editable) y
 * se pinta antes del CTA: detrás del banner de "contáctenos" nadie la lee.
 */
const Catalog = ({ faqItems, intro }: CatalogProps) => (
	<div>
		<SectionPrincipalBanner
			title="Catálogo"
			h1="Productos de imprenta en Madrid"
			subtitle="Soluciones y servicios gráficos"
		/>
		{intro && (
			<p className="px-5 pt-10 mx-auto max-w-[800px] text-base lg:text-lg text-center">{intro}</p>
		)}
		<div className="pt-10 w-full max-w-[1200px] mx-auto grid grid-cols min-[480px]:grid-cols-2 min-[800px]:grid-cols-3">
			{catalogOptions.map((elm) => (
				<div key={elm.title} className="w-full">
					<CatalogOption {...elm} />
				</div>
			))}
		</div>
		{faqItems && faqItems.length > 0 && (
			<section className="px-5 pt-10 mx-auto max-w-[1200px]">
				<FAQ items={faqItems} />
			</section>
		)}
		<KnowMore path={"/contacto"} copy={"CONTÁCTENOS"} />
	</div>
);

export default Catalog;
