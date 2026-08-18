/**
 * Emite un bloque JSON-LD válido.
 *
 * IMPORTANTE: hay que usar `dangerouslySetInnerHTML`. Si se pasa el JSON como
 * hijo de texto (`<script>{JSON.stringify(data)}</script>`), React escapa las
 * comillas a `&quot;`. El elemento `<script>` es "raw text" en la especificación
 * HTML, así que el parser no decodifica entidades y el rastreador recibe una
 * cadena que no es JSON válido.
 */
const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
	<script
		type="application/ld+json"
		// biome-ignore lint/security/noDangerouslySetInnerHtml: obligatorio para que el JSON-LD no salga escapado
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
	/>
);

export default JsonLd;
