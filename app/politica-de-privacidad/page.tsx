import { OG_DEFAULTS, absoluteUrl, ogImage, ogImageUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Política de privacidad",
	description: "Política de privacidad de Dinaprint.S.L.",
	alternates: {
		canonical: "/politica-de-privacidad",
	},
	robots: {
		index: false,
		follow: true,
	},
	openGraph: {
		...OG_DEFAULTS,
		type: "website",
		title: "Política de privacidad",
		url: absoluteUrl("/politica-de-privacidad"),
		description: "Política de privacidad de Dinaprint.S.L.",
		images: [ogImage("/slider-principal-dinaprint.jpg", "Política de privacidad - Dinaprint")],
	},
	twitter: {
		title: "Política de privacidad",
		images: [ogImageUrl("/slider-principal-dinaprint.jpg")],
	},
};

export default async function Page() {
	return (
		<main className="px-5 py-10 mx-auto max-w-[1200px]">
			<h1 className="text-3xl font-medium pb-5">Política de privacidad</h1>
			<p className="pb-4">
				DINAPRINT S.L es la responsable del tratamiento y de conformidad con lo establecido en el
				Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 y la
				Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos Digitales, garantiza
				la seguridad y confidencialidad de los datos facilitados por sus clientes{" "}
			</p>
			<p className="pb-4">
				DINAPRINT S.L informa que los datos personales facilitados a través de los formularios de
				esta Web o mediante mensajes de correo electrónico, serán incorporados en unos tratamientos
				de DINAPRINT S.L y serán tratados de manera informatizada y en papel.
			</p>
			<p className="pb-4">
				Mediante el envío de los formularios existentes en esta Web así como a través de las
				comunicaciones que nos puedas dirigir por otros medios de contacto, el remitente nos
				proporciona sus datos personales de forma libre y voluntaria para ser incluido en un
				tratamiento con el objeto de suministrarle la información solicitada en los formularios o
				suscripciones.{" "}
			</p>
			<p className="pb-4">
				En el caso de que el usuario decida cumplimentar algún formulario de este sitio Web dónde se
				recaben datos de carácter personal se le informa que DINAPRINT S.L adoptará las medidas de
				índole técnica y organizativa necesarias que garanticen la seguridad de los datos
				suministrados a fin de evitar alteraciones, pérdidas, tratamientos o accesos no autorizados,
				conforme al estado actual de la tecnología y de acuerdo con lo establecido por la normativa
				vigente.{" "}
			</p>
			<p className="pb-4">
				DINAPRINT S.L sin embargo no puede garantizar la absoluta inexpugnabilidad del sistema, la
				red de acceso, Internet y por tanto la violación de los datos mediante accesos fraudulentos
				a ellos por parte de terceros.
			</p>
			<p className="pb-4">
				El sitio web contiene enlaces a sitios web de terceros con políticas de privacidad ajenas a
				la de DINAPRINT S.L que usted podrá decidir si acepta o no cuando acceda a ellos.
			</p>
			<p className="pb-4">
				El usuario responderá en cualquier caso de la veracidad de la información suministrada y se
				hace responsable de comunicar a DINAPRINT S.L cualquier modificación sobre la misma,
				quedando DINAPRINT S.L exenta de cualquier responsabilidad en este sentido.
			</p>
			<p className="pb-4">
				La información sobre finalidad, legitimación, conservación y comunicaciones del tratamiento
				son:{" "}
			</p>
			<p className="pb-4">
				<b>Usuarios web:</b> servir como soporte de información a la gestión de las comunicaciones y
				relaciones comerciales por vía electrónica. En cuanto a la legitimación del tratamiento
				estará regulada por el consentimiento del afectado y por el interés legítimo del
				responsable. Los datos proporcionados se conservarán hasta para dar soporte a su solicitud,
				la revocación del consentimiento o durante los años necesarios para cumplir con las
				obligaciones legales. DINAPRINT S.L no cederá datos a terceros salvo obligación legal, sin
				perjuicio del acceso a los mismos por parte de los prestadores de servicios que actúan como
				encargados del tratamiento y que se detallan en el apartado siguiente.
			</p>
			<p className="pb-4 font-medium">Encargados del tratamiento</p>
			<p className="pb-4">
				Para poder prestar sus servicios, DINAPRINT S.L cuenta con proveedores que acceden a datos
				personales por cuenta del responsable. Estos proveedores actúan como encargados del
				tratamiento en los términos del artículo 28 del RGPD, en virtud del correspondiente contrato
				de encargo, y únicamente tratan los datos conforme a nuestras instrucciones:
			</p>
			<p className="pb-4">
				- <b>EmailJS:</b> servicio de envío del formulario de contacto. Tiene acceso a los datos que
				usted introduce en dicho formulario (nombre, correo electrónico, teléfono y contenido del
				mensaje) con la única finalidad de hacérnoslos llegar por correo electrónico. Este proveedor
				puede tratar los datos en servidores situados fuera del Espacio Económico Europeo, en cuyo
				caso la transferencia internacional se ampara en las cláusulas contractuales tipo aprobadas
				por la Comisión Europea u otra garantía adecuada prevista en el capítulo V del RGPD.
			</p>
			<p className="pb-4">
				- <b>Cloudflare:</b> red de distribución de contenidos y protección del sitio web. Trata
				datos técnicos de conexión (como la dirección IP) con la finalidad de servir el sitio y
				garantizar su seguridad y disponibilidad.
			</p>
			<p className="pb-8">
				- <b>Contabo GmbH:</b> proveedor de alojamiento (hosting) del sitio web y de la herramienta
				de analítica. Los servidores se encuentran ubicados en la Unión Europea. Da soporte a la
				infraestructura del sitio y almacena los datos técnicos y las comunicaciones alojadas en él.
			</p>
			<p className="pb-4 font-medium">Analítica web</p>
			<p className="pb-8">
				Este sitio web utiliza Plausible Analytics, una herramienta de medición alojada en
				servidores propios ubicados en la Unión Europea, con el fin de conocer de forma agregada el
				número de visitas y las páginas más consultadas. Plausible no instala cookies ni ningún otro
				identificador en su dispositivo, no almacena su dirección IP, no elabora perfiles y no
				rastrea a los usuarios entre distintos sitios web ni entre visitas. La información obtenida
				es anónima y agregada, por lo que no permite identificarle. Puede consultar más detalles en
				nuestra{" "}
				<Link href="/politica-de-cookies" className="underline">
					Política de cookies
				</Link>
				.
			</p>
			<p className="pb-4">
				Si lo desea puede dirigirse a DINAPRINT S.L, domiciliada en calle Bahamas 37, 28340 de
				Valdemoro, Madrid, España, con una copia de DNI o documento acreditativo equivalente con el
				fin de ejercer los siguientes derechos:
			</p>
			<p className="pb-4">
				- Derecho de acceso: derecho a obtener confirmación sobre si DINAPRINT S.L está tratando
				datos personales que le conciernen y, en tal caso, acceder a los mismos.
			</p>
			<p className="pb-4">
				- Derecho de portabilidad: derecho a recibir los datos personales que nos haya facilitado en
				un formato estructurado de uso común y legible, así como a transmitirlo a otra entidad.
			</p>
			<p className="pb-4">
				- Derecho de rectificación: derecho a solicitar la rectificación de los datos cuando sean
				inexactos.
			</p>
			<p className="pb-4">
				- Derecho de supresión: derecho a solicitar la supresión de los datos cuando ya no sean
				necesarios para los fines que fueron facilitados en su momento.
			</p>
			<p className="pb-4">
				Derecho de oposición: derecho a oponerte al tratamiento de tus datos personales. DINAPRINT
				S.L dejará de tratar los datos, salvo por motivos legítimos o en el ejercicio de posibles
				reclamaciones.
			</p>
			<p className="pb-8">
				Derecho a la limitación del tratamiento: derecho a solicitar la limitación del tratamiento
				de sus datos.
			</p>
			<p className="pb-8">
				Por otro lado, si lo ha facilitado, tendrá derecho a retirar el consentimiento prestado en
				cualquier momento y el derecho a reclamar ante la Agencia Española de Protección de Datos.
			</p>
		</main>
	);
}
