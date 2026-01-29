import Image from "next/image";
import type React from "react";

const ServicesPrincipal: React.FC = () => (
	<div className="md:flex justify-center max-w-[1200px] mx-auto">
		<div className="w-full md:w-1/2">
			<Image
				src={"/negocio-01.jpg"}
				className="!static"
				layout="fill"
				objectFit="cover"
				alt="servicios"
			/>
		</div>
		<div className="p-5 pt-10 md:pt-5 md:w-1/2">
			<h2 className="pb-5 text-3xl text center text-secondary font-semibold">
				Servicios Dinaprint
			</h2>
			<p className="pb-4">
				Aportamos soluciones para todas las necesidades en comunicación gráfica.
			</p>
			<p>
				Dependemos de nosotros mismos y no de terceros, por lo tanto, el control de la producción
				desde que se acepta el presupuesto, hasta su distribución, es solo nuestro. De esta manera
				nos ajustamos a las necesidades de cada cliente, haciendo que su satisfacción se convierta
				en un reto.
			</p>
		</div>
	</div>
);

export default ServicesPrincipal;
