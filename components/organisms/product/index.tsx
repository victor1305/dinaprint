import type React from "react";

import {
	Breadcrumbs,
	CatalogDetail,
	KnowMore,
	LocalCoverage,
	ProductSections,
	RelatedProducts,
	SectionPrincipalBanner,
	SpecTable,
} from "@/components/atoms";

import type { ProductSection } from "@/components/atoms";
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
	/**
	 * Producto en minúscula y plural para el bloque de cobertura local
	 * ("roll ups", "carteles"). Sin él no se pinta el bloque.
	 */
	localProduct?: string;
	/** Contenido extenso propio de la ficha, bajo la tabla de especificaciones. */
	sections?: ProductSection[];
}

/**
 * Migas de pan y fichas relacionadas se resuelven por la URL (ver
 * `Breadcrumbs` y `RelatedProducts`): la página no tiene que pasar nada.
 */
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
	localProduct,
	sections,
}: ProductProps) => (
	<div>
		<SectionPrincipalBanner {...{ title, subtitle, h1 }} />
		<div className="px-5 pt-8 mx-auto max-w-[1200px]">
			<Breadcrumbs />
		</div>
		<div className="pt-6">
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
		{sections && sections.length > 0 && <ProductSections sections={sections} />}
		{localProduct && <LocalCoverage product={localProduct} />}
		<RelatedProducts />
		<KnowMore path={"/contacto"} copy={"PEDIR PRESUPUESTO"} />
	</div>
);

export default Product;
