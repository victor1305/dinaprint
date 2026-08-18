import Image from "next/image";
import type React from "react";

interface ServiceProps {
	title: string;
	image: string;
	icon: string;
	text: string;
	imageLeft: boolean;
}

const Service: React.FC<ServiceProps> = ({ title, image, icon, text, imageLeft }: ServiceProps) => (
	<div className={`md:flex ${imageLeft ? "flex-row" : "flex-row-reverse"} md:items-center`}>
		<div className="relative w-full h-[320px] md:h-[414px] md:w-1/2">
			<Image
				src={image}
				alt={`${title} - Dinaprint`}
				fill
				sizes="(max-width: 768px) 100vw, 50vw"
				className="object-cover object-center"
			/>
		</div>
		<div className="p-10 text-center w-full md:w-1/2">
			<Image src={icon} width={70} height={70} alt="" aria-hidden="true" className="mx-auto mb-5" />
			<h3 className="text-2xl text-secondary pb-5 font-semibold">{title}</h3>
			<p>{text}</p>
		</div>
	</div>
);

export default Service;
