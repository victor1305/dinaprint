import type React from "react";

import { CatalogDetail, KnowMore, SectionPrincipalBanner } from "@/components/atoms";

interface ProductProps {
	title: string;
	h1?: string;
	subtitle: string;
	product: string;
	text: string[];
	image: string;
	list?: string[];
}

const Product: React.FC<ProductProps> = ({
	title,
	h1,
	product,
	subtitle,
	text,
	image,
	list,
}: ProductProps) => (
	<div>
		<SectionPrincipalBanner {...{ title, subtitle, h1 }} />
		<div className="pt-10">
			<CatalogDetail {...{ product, text, image, list }} />
		</div>
		<KnowMore path={"/contacto"} copy={"CONTÁCTENOS"} />
	</div>
);

export default Product;
