import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface CatalogOptionProps {
	image: string;
	title: string;
	path: string;
}

const CatalogOption: React.FC<CatalogOptionProps> = ({
	image,
	title,
	path,
}: CatalogOptionProps) => (
	<div className="p-2.5 lg:p-5 h-full">
		<Link href={path}>
			<div className="overflow-hidden h-[85%] hover:brightness-50 transition-all duration-700 ease-in-out delay-0">
				<Image
					src={image}
					className="!static"
					layout="fill"
					objectFit="cover"
					fill={true}
					alt="Opcion catálogo"
				/>
			</div>
		</Link>
		<h4 className="mt-5 font-medium text-center">
			<Link href={path} className="hover:text-lg hover:underline hover:text-secondary">
				{title}
			</Link>
		</h4>
	</div>
);

export default CatalogOption;
