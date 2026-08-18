import Image from "next/image";
import Link from "next/link";

const MainLast = () => (
	<div className="relative w-full h-[278px] overflow-hidden">
		<Image
			src="/banner.jpg"
			alt=""
			aria-hidden="true"
			fill
			sizes="100vw"
			className="object-cover object-center -z-10"
		/>
		<h2 className="pt-5 text-[21px] min-[374px]:text-2xl min-[410px]:pt-10 min-[500px]-text-3xl text-secondary font-semibold text-center">
			SIEMPRE EL MEJOR PRECIO
		</h2>
		<p className="text-sm min-[374px]:text-base text-white text-center font-medium p-5 max-w-[700px] mx-auto">
			No variamos el precio en función del tiempo, nuestros precios son siempre igual de
			interesantes. Cada presupuesto se plantea de forma independiente por un asesor técnico.
		</p>
		<div className="text-center">
			<Link
				href="/contacto"
				className="inline-block text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
			>
				PEDIR PRESUPUESTO
			</Link>
		</div>
	</div>
);

export default MainLast;
