import type React from "react";

import { CatalogDetail, KnowMore, SectionPrincipalBanner, SpecTable } from "@/components/atoms";

import type { SpecRow } from "@/components/atoms/SpecTable";

interface ProductProps {
	title: string;
	h1?: string;
	subtitle: string;
	product: string;
	text: string[];
	image: string;
	list?: string[];
	/** Tabla de especificaciones técnicas. Es el contenido que decide la compra. */
	specs?: SpecRow[];
	specsCaption?: string;
}

const Product: React.FC<ProductProps> = ({
	title,
	h1,
	product,
	subtitle,
	text,
	image,
	list,
	specs,
	specsCaption,
}: ProductProps) => (
	<div>
		<SectionPrincipalBanner {...{ title, subtitle, h1 }} />
		<div className="pt-10">
			<CatalogDetail {...{ product, text, image, list }} />
		</div>
		{specs && specs.length > 0 && (
			<div className="px-5 mx-auto max-w-[1200px]">
				<SpecTable
					title={`Especificaciones de ${product.toLowerCase()}`}
					caption={specsCaption}
					rows={specs}
				/>
			</div>
		)}
		<KnowMore path={"/contacto"} copy={"PEDIR PRESUPUESTO"} />
	</div>
);

export default Product;
