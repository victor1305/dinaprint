import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Aviso legal",
	description: "Aviso legal de Dinaprint S.L.",
	alternates: {
		canonical: "/aviso-legal",
	},
	robots: {
		index: false,
		follow: true,
	},
};

export default async function Page() {
	return (
		<main className="px-5 py-10 mx-auto max-w-[1200px]">
			<h2 className="text-3xl font-medium pb-5">Aviso legal</h2>
			<p className="pb-4 font-medium">Datos generales</p>
			<p className="pb-4">
				DINAPRINT S.L, (en adelante DINAPRINT S.L) como titular del sitio web y de acuerdo con el
				artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
				y de Comercio Electrónico pone a su disposición los siguientes datos:
			</p>
			<p className="pb-4">- Su denominación social es DINAPRINT S.L</p>
			<p className="pb-4">- CIF: B81222457</p>
			<p>
				- Registro Mercantil de Madrid Tomo 9692,Libro 0 Folio 1 Seccion 8 Hoja m-155707,
				Inscripcion 1ª .
			</p>
			<p className="pb-4">
				- Su domicilio social está en Calle Bahamas, 37, 28340 de Valdemoro, Madrid, España.
			</p>
			<p className="pb-8">
				DINAPRINT S.L informa que la web https://dinaprint.com/ tiene por objeto facilitar, al
				público en general, el conocimiento de las actividades que esta empresa realiza y de los
				productos y servicios que presta.
			</p>
			<p className="pb-4 font-medium">Condiciones de uso</p>
			<p className="pb-4">
				El acceso y utilización de este sitio Web le atribuye la condición de usuario, aceptando con
				dicho acceso las Condiciones de Uso expuestas a continuación.
			</p>
			<p className="pb-4">
				Este sitio Web proporciona al usuario acceso a información y contenidos sobre los que el
				usuario asume la responsabilidad, extendiéndose esta al proceso de registro que pudiera ser
				necesario para acceder a determinados servicios o contenidos.
			</p>
			<p className="pb-4">
				En el proceso de registro el usuario será igualmente responsable de facilitar información
				veraz, legítima y actualizada, así como de hacer un uso diligente y confidencial de los
				datos de acceso proporcionados.
			</p>
			<p className="pb-8">
				El usuario se compromete a hacer un uso adecuado de la información, contenidos y servicios
				del presente sitio Web y en especial a no realizar ninguna acción que pudiera causar daños
				físicos o lógicos al sistema así como intentar acceder al mismo de modo fraudulento
				utilizando datos de acceso no autorizados.
			</p>
			<p className="pb-4 font-medium">Responsabilidades</p>
			<p className="pb-4">
				Tanto el acceso a esta Web como el uso que pueda hacerse de la información contenida en el
				mismo es de la exclusiva responsabilidad de quien lo realiza. El usuario será responsable de
				todas las acciones que realice con su identificador de usuario.
			</p>
			<p className="pb-4">
				En concreto, será responsable de escoger, como clave y como recordatorio de la misma,
				contraseñas y frases robustas, esto es, cifras y letras e incluso, en los sistemas que lo
				permitan, signos de puntuación y caracteres especiales, difíciles de adivinar. En especial,
				el usuario evitará escoger palabras del diccionario, palabras que estén relacionadas con él
				mismo (nombre de familiar, domicilio, fecha de nacimiento, etc.) o sencillas de adivinar
				(combinaciones de nombres con meses, prefijos y sufijos, etc.). DINAPRINT S.L no responderá
				de ninguna consecuencia, daño o perjuicio que pudieran derivarse de dicho acceso o uso de la
				información.
			</p>
			<p className="pb-4">
				DINAPRINT S.L se reserva el derecho de efectuar sin previo aviso y sin asumir alguna
				responsabilidad por ello las modificaciones que considere oportunas en su sitio Web,
				pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través
				de la misma como la forma en la que éstos aparezcan presentados o localizados.
			</p>
			<p className="pb-4">
				Le comunicamos que cualquier precio u oferta que pueda ver en nuestra web será solamente
				orientativo. Si el usuario desea saber con exactitud el precio de un producto o servicio
				deberá contactar con DINAPRINT S.L para que le elabore un presupuesto.
			</p>
			<p className="pb-4">
				DINAPRINT S.L no garantiza la inexistencia de errores en el acceso a la Web, en su
				contenido, ni que éste se encuentre actualizado, aunque desarrollará sus mejores esfuerzos
				para, en su caso, evitarlos, subsanarlos o actualizarlos.
			</p>
			<p className="pb-8">
				DINAPRINT S.L no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier
				naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los
				contenidos, falta de disponibilidad del portal o la transmisión de virus o programas
				maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas
				tecnológicas necesarias para evitarlo.
			</p>
			<p className="pb-4 font-medium">Propiedad intelectual e industrial</p>
			<p className="pb-4">
				DINAPRINT S.L es propietaria o dispone de los debidos permisos relativos a los derechos de
				propiedad intelectual de este sitio Web y de los elementos contenidos en el mismo: textos,
				imágenes, sonidos, vídeos, marcas, logotipos, diseño, etc. En virtud de lo dispuesto en los
				artículos 8 y 32.1 de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la
				reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a
				disposición, de la totalidad o parte de los contenidos de este sitio Web en cualquier
				soporte y por cualquier medio técnico, sin la autorización de DINAPRINT S.L y/o de sus
				respectivos autores o titulares de los derechos.
			</p>
			<p className="pb-4">
				El usuario podrá visualizar, imprimir, copiar y almacenar los elementos de este sitio Web
				siempre y cuando sea, única y exclusivamente, para su uso personal y privado.
			</p>
			<p className="pb-4">
				La utilización no autorizada de la información contenida en esta Web, así como la lesión de
				los derechos de Propiedad Intelectual o Industrial de DINAPRINT S.L, dará lugar a las
				responsabilidades legalmente establecidas.
			</p>
			<p className="pb-8">
				Todos los productos y servicios de estas páginas que NO son propiedad de DINAPRINT S.L son
				marcas registradas por sus respectivos propietarios y son reconocidas como tales por nuestra
				empresa. Solamente aparecen en la web de DINAPRINT S.L a efectos de promoción y de
				recopilación de información. Estos propietarios pueden solicitar la modificación o
				eliminación de la información que les pertenece.
			</p>
			<p className="pb-4 font-medium">Ley aplicable y jurisdicción</p>
			<p className="pb-8">
				El presente aviso legal y condiciones generales se rigen por la legislación Española y
				cualquier tipo de controversia o litigio relativo al uso de este sitio Web será interpretado
				conforme a las leyes vigentes en el lugar de residencia del propietario de este sitio web,
				teniendo competencia para la resolución de todo litigio o conflicto que pueda surgir los
				Juzgados y Tribunales competentes dentro del ámbito territorial Español, renunciando
				expresamente el usuario a cualquier otro fuero.
			</p>
		</main>
	);
}
