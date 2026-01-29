import type React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

interface FindBoxProps {
	title: string;
	subtitle: string;
}

const FindBox: React.FC<FindBoxProps> = ({ title, subtitle }: FindBoxProps) => (
	<div className="relative w-full p-[14%] shadow-findBox rounded-l-[70px] !rounded-t-[15px] !rounded-r-[15px] text-center lg:w-[300px] lg:h-[252px] lg:flex lg:flex-col lg:justify-center">
		<div className="mb-4 text-primary flex justify-center text-[50px]">
			{title === "Teléfono" && <FaPhoneAlt />}
			{title === "Email" && <FaRegEnvelope />}
			{title === "Ubicación" && <FaMapMarkerAlt />}
		</div>
		<h4 className="pb-2.5">{title}</h4>
		<p>{subtitle}</p>
	</div>
);

export default FindBox;
