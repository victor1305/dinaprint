import type React from "react";

const ContactMain: React.FC = () => (
	<div className="text-center max-w-[600px] mx-auto">
		<h3 className="text-3xl text-[#3d4459] pb-5 leading-8">
			Si necesitas más información sobre nuestra empresa o sobre nuestros servicios,
		</h3>
		<p className="text-[#3d4459] pb-5 leading-6">
			ponte en contacto con nosotros hoy mismo a través del siguiente formulario, llámanos o si lo
			prefieres te llamamos nosotros. Estaremos encantados de atenderte.
		</p>
		<p className="font-medium text-[#3d4459] pb-1">Lunes a jueves: 08:00 a 18:00</p>
		<p className="font-medium text-[#3d4459]">Viernes: 08:00 a 15:00</p>
	</div>
);

export default ContactMain;
