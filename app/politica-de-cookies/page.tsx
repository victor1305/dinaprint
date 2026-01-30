import { absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Política de cookies",
	description: "Política de cookies de Dinaprint.S.L.",
	alternates: {
		canonical: "/politica-de-cookies",
	},
	robots: {
		index: false,
		follow: true,
	},
	openGraph: {
		title: "Política de cookies",
		url: absoluteUrl("/politica-de-cookies"),
		images: [{ url: absoluteUrl("/slider-principal-dinaprint.jpg") }],
	},
	twitter: {
		title: "Política de cookies",
		images: [absoluteUrl("/slider-principal-dinaprint.jpg")],
	},
};

export default async function Page() {
	return (
		<main className="px-5 py-10 mx-auto max-w-[1200px]">
			<h2 className="text-3xl font-medium pb-5">Política de cookies</h2>
			<p className="pb-4">
				El sitio web de DINAPRINT, S.L utiliza cookies. Usted puede cambiar la configuración o
				retirar su consentimiento de las cookies de nuestra web en cualquier momento.
			</p>
			<p className="pb-4">
				Esta página utiliza tipos diferentes de cookies. Algunas cookies son colocadas por servicios
				de terceros que aparecen en nuestras páginas. Solo se almacenarán cookies en su dispositivo
				si son estrictamente necesarias para el correcto funcionamiento del sitio web. Para todos
				los demás tipos de cookies necesitamos su consentimiento mediante la activación de la
				casilla correspondiente.{" "}
			</p>
			<p className="pb-4">
				También utilizamos cookies de analítica web para medir y analizar la navegación de los
				usuarios en nuestra página web.
			</p>
			<p className="pb-8">
				Puede obtener más información sobre nosotros y cómo contactarnos en nuestro Aviso legal y de
				cómo tratamos los datos personales en nuestra Política de Privacidad.{" "}
			</p>
			<p className="pb-4 font-medium">¿Qué son las cookies?</p>
			<p className="pb-8">
				Una cookie es un fichero que se descarga en su dispositivo a través de la web. Las cookies
				permiten a una página web, entre otras cosas, hacer funcione correctamente, almacenar y
				recuperar información sobre los hábitos de navegación de un usuario o de su dispositivo y,
				dependiendo de la información que contengan y de la forma en que utilice su dispositivo,
				pueden utilizarse para reconocer al usuario.{" "}
			</p>
			<p className="pb-4 font-medium">Tipos de cookies</p>
			<p className="pb-4">
				Cookies técnicas y funcionales: son las estrictamente necesarias para el uso del sitio web y
				para la prestación del servicio contratado.
			</p>
			<p className="pb-4">
				Cookies analíticas: recogen información del uso que se realiza del sitio web.
			</p>
			<p className="pb-4">
				Cookies de preferencias y personalización: Son aquéllas que permiten al usuario acceder al
				servicio con algunas características de carácter general predefinidas en función de una
				serie de criterios en el dispositivo del usuario como por ejemplo serian el idioma, el tipo
				de navegador a través del cual accede al servicio, la configuración regional desde donde
				accede al servicio, etc.
			</p>
			<p className="pb-4">
				Cookies sociales: son aquellas necesarias para redes sociales externas.
			</p>
			<p className="pb-8">
				Cookies de publicidad y comportamentales: recogen información sobre las preferencias y
				elecciones personales del usuario (retargeting).
			</p>
			<p className="pb-4 font-medium">¿Qué tipos de cookies utiliza esta página web?</p>
			<p className="pb-4 font-medium">Necesarias (Técnicas)</p>
			<p className="pb-4">
				Las cookies necesarias activan las funciones básicas como la navegación en la página y el
				acceso a áreas seguras de la página web. La página web no puede funcionar adecuadamente sin
				estas cookies.
			</p>
			<p className="pb-4 font-medium">Desactivación de cookies</p>
			<p className="pb-4">
				Para permitir, conocer, bloquear o eliminar las cookies instaladas en su equipo puede
				hacerlo mediante la configuración de las opciones del navegador instalado en su ordenador.{" "}
			</p>
			<p className="pb-4">
				Cambiar la configuración de aceptación de cookies, podría entorpecer la navegación y
				restarle funcionalidades a nuestra web. Aun así, si quieres más información sobre su
				configuración, puedes consultar las páginas web de los diferentes navegadores:
			</p>
			<p className="pb-4">
				- Google Chrome:{" "}
				<a
					href="https://support.google.com/chrome/answer/95647?hl=es"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://support.google.com/chrome/answer/95647?hl=es
				</a>
			</p>
			<p className="pb-4">
				- Firefox:{" "}
				<a
					href="http://help.opera.com/Windows/8.54/es-ES/index.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					http://support.mozilla.org/es/home
				</a>
			</p>
			<p className="pb-4">
				- Safari:{" "}
				<a
					href="http://help.opera.com/Windows/8.54/es-ES/index.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					http://support.apple.com/kb/HT1677?viewlocale=es_ES
				</a>
			</p>
			<p className="pb-4">
				- Internet Explorer:{" "}
				<a
					href="http://help.opera.com/Windows/8.54/es-ES/index.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					http://support.microsoft.com/ph/807/es-es
				</a>
			</p>
			<p className="pb-4">
				- Opera:{" "}
				<a
					href="http://help.opera.com/Windows/8.54/es-ES/index.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					http://help.opera.com/Windows/8.54/es-ES/index.html
				</a>
			</p>
		</main>
	);
}
