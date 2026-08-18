import { OG_DEFAULTS, absoluteUrl, ogImage, ogImageUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

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
		...OG_DEFAULTS,
		type: "website",
		title: "Política de cookies",
		url: absoluteUrl("/politica-de-cookies"),
		description: "Política de cookies de Dinaprint.S.L.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Política de cookies - Dinaprint")],
	},
	twitter: {
		title: "Política de cookies",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
};

export default async function Page() {
	return (
		<main className="px-5 py-10 mx-auto max-w-[1200px]">
			<h1 className="text-3xl font-medium pb-5">Política de cookies</h1>
			<p className="pb-8">
				<b>
					Este sitio web no utiliza cookies, ni propias ni de terceros, y tampoco emplea ningún otro
					mecanismo de seguimiento o identificación en su dispositivo.
				</b>{" "}
				Por ese motivo no se le solicita consentimiento ni se muestra ningún aviso de cookies al
				entrar en la web.
			</p>
			<p className="pb-4 font-medium">¿Qué son las cookies?</p>
			<p className="pb-8">
				Una cookie es un fichero que se descarga en su dispositivo al visitar determinadas páginas
				web. Las cookies permiten, entre otras cosas, almacenar y recuperar información sobre los
				hábitos de navegación de un usuario o de su dispositivo y, dependiendo de la información que
				contengan y de la forma en que utilice su dispositivo, pueden utilizarse para reconocer al
				usuario.
			</p>
			<p className="pb-4 font-medium">¿Por qué esta web no necesita un aviso de cookies?</p>
			<p className="pb-4">
				El artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de
				Comercio Electrónico (LSSI-CE) exige informar y obtener el consentimiento del usuario cuando
				un sitio web almacena información en su dispositivo o accede a información ya almacenada en
				él.
			</p>
			<p className="pb-8">
				DINAPRINT S.L no realiza ninguna de esas operaciones: no instala cookies, no utiliza
				almacenamiento local del navegador con fines de seguimiento, no emplea píxeles ni balizas
				web, y no incorpora servicios de publicidad, redes sociales o mapas incrustados que puedan
				instalarlos por su cuenta. Al no producirse almacenamiento ni acceso a la información de su
				dispositivo, no resulta aplicable la obligación de recabar consentimiento.
			</p>
			<p className="pb-4 font-medium">Analítica web sin cookies</p>
			<p className="pb-4">
				Para conocer el número de visitas y las páginas más consultadas utilizamos Plausible
				Analytics, una herramienta de analítica web alojada en servidores europeos bajo nuestro
				control.
			</p>
			<p className="pb-4">
				Plausible no utiliza cookies ni almacena identificadores en su dispositivo. No registra su
				dirección IP ni genera perfiles, no rastrea a los usuarios entre distintos sitios web ni
				entre visitas diferentes, y no comparte ni vende información a terceros. Los datos que
				recoge son agregados y anónimos (páginas visitadas, país aproximado, tipo de dispositivo,
				navegador y página de procedencia), por lo que no permiten identificarle.
			</p>
			<p className="pb-8">Por estas razones, esta medición no requiere su consentimiento previo.</p>
			<p className="pb-4 font-medium">Fuentes tipográficas</p>
			<p className="pb-8">
				Las tipografías utilizadas en la web se sirven desde nuestros propios servidores. Su
				navegador no realiza ninguna conexión a servidores de terceros para descargarlas.
			</p>
			<p className="pb-4 font-medium">Formulario de contacto</p>
			<p className="pb-8">
				El formulario de contacto no instala cookies. Los datos que usted introduce voluntariamente
				en él se tratan conforme a lo indicado en nuestra{" "}
				<Link href="/politica-de-privacidad" className="underline">
					Política de privacidad
				</Link>
				.
			</p>
			<p className="pb-4 font-medium">Cómo gestionar las cookies en su navegador</p>
			<p className="pb-4">
				Aunque esta web no instale cookies, puede consultar, bloquear o eliminar en cualquier
				momento las cookies instaladas por cualquier sitio web desde la configuración de su
				navegador:
			</p>
			<p className="pb-4">
				- Google Chrome:{" "}
				<a
					href="https://support.google.com/chrome/answer/95647?hl=es"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					support.google.com/chrome/answer/95647
				</a>
			</p>
			<p className="pb-4">
				- Mozilla Firefox:{" "}
				<a
					href="https://support.mozilla.org/es/kb/Borrar%20cookies"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					support.mozilla.org/es/kb/Borrar cookies
				</a>
			</p>
			<p className="pb-4">
				- Safari:{" "}
				<a
					href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					support.apple.com/es-es/guide/safari/sfri11471/mac
				</a>
			</p>
			<p className="pb-4">
				- Microsoft Edge:{" "}
				<a
					href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					support.microsoft.com/es-es/microsoft-edge
				</a>
			</p>
			<p className="pb-8">
				- Opera:{" "}
				<a
					href="https://help.opera.com/es/latest/web-preferences/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					help.opera.com/es/latest/web-preferences
				</a>
			</p>
			<p className="pb-4 font-medium">Cambios en esta política</p>
			<p className="pb-4">
				Si en el futuro incorporásemos cookies o cualquier tecnología de seguimiento, actualizaremos
				esta política y, cuando la normativa lo exija, solicitaremos su consentimiento previo
				mediante el correspondiente sistema de gestión de consentimiento.
			</p>
			<p className="pb-4">
				Puede obtener más información sobre nosotros y cómo contactarnos en nuestro{" "}
				<Link href="/aviso-legal" className="underline">
					Aviso legal
				</Link>{" "}
				y sobre cómo tratamos los datos personales en nuestra{" "}
				<Link href="/politica-de-privacidad" className="underline">
					Política de privacidad
				</Link>
				.
			</p>
		</main>
	);
}
