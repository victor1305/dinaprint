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
		<div
			className="w-full h-[320px] md:h-[414px] bg-center bg-cover md:w-1/2"
			style={{ backgroundImage: `url(${image})` }}
		/>
		<div className="p-10 text-center w-full md:w-1/2">
			<Image src={icon} width={70} height={70} alt="icono servicio" className="mx-auto mb-5" />
			<h4 className="text-2xl text-secondary pb-5 font-semibold">{title}</h4>
			<p>{text}</p>
		</div>
	</div>
);

export default Service;
