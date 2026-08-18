import Link from "next/link";
import type React from "react";

const MainPrincipal: React.FC = () => (
	<div className="px-7 bg-[url('/slider-principal-dinaprint.jpg')] bg-cover bg-center w-full h-[400px] lg:h-[600px] flex flex-col items-center justify-center">
		<h1 className="text-[30px] lg:text-[46px] text-center text-white pb-3 font-bold drop-shadow-title-home text-balance">
			Imprenta en Madrid: impresión digital y offset
		</h1>
		<p className="text-lg lg:text-2xl text-white font-bold drop-shadow-title-home mb-2 text-center">
			¡Déjanos impresionarte!
		</p>
		<p className="text-base lg:text-xl text-white font-semibold drop-shadow-title-home mb-5 lg:mb-10 text-center max-w-[720px]">
			Papelería corporativa, catálogos, folletos, carteles, packaging y regalo promocional desde
			nuestra imprenta en Pinto, sur de Madrid.
		</p>
		<Link
			href={"/servicios"}
			className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
		>
			VER MÁS
		</Link>
	</div>
);

export default MainPrincipal;
