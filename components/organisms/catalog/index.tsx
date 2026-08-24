import { catalogOptions } from "@/lib/constants";

import {
	type FAQItem,
	CatalogOption,
	FAQ,
	KnowMore,
	SectionPrincipalBanner,
} from "@/components/atoms";

/**
 * La FAQ llega desde la página (donde vive el resto del contenido editable) y
 * se pinta antes del CTA: detrás del banner de "contáctenos" nadie la lee.
 */
const Catalog = ({ faqItems }: { faqItems?: FAQItem[] }) => (
	<div>
		<SectionPrincipalBanner title="Catálogo" subtitle="Soluciones y servicios gráficos" />
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
