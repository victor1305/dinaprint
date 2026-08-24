import { BLOG_CATEGORIES, type BlogPost, getAllPosts, getCategorySlug } from "@/lib/blog";
import { formatBusinessHours } from "@/lib/hours";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

/**
 * `/llms.txt` — índice del sitio en Markdown para modelos de lenguaje.
 *
 * Mismo criterio que el sitemap: se genera desde las fuentes reales (rutas del
 * catálogo en `lib/constants.ts`, artículos en `content/posts/`) para que no se
 * quede obsoleto cada vez que se publica algo. El formato es el de
 * llmstxt.org: H1, resumen en cita, párrafos de contexto y listas de enlaces
 * agrupadas por H2, con la sección final "Optional" para lo prescindible.
 */

// La imagen de runtime (standalone) no lleva `content/`, así que el fichero
// tiene que quedar resuelto en el build, igual que el sitemap.
export const dynamic = "force-static";

/** `- [Título](url): nota` — la línea de enlace que define el formato. */
function link(title: string, pathname: string, note?: string) {
	return `- [${title}](${absoluteUrl(pathname)})${note ? `: ${note}` : ""}`;
}

function postLine(post: BlogPost) {
	return link(post.title, `/blog/${post.slug}`, post.description);
}

const CATALOG_ENTRIES: [string, string, string][] = [
	["Catálogos", "/catalogo/catalogos", "catálogos de producto grapados o encuadernados"],
	[
		"Cartas y menús",
		"/catalogo/cartas-y-menus",
		"cartas para hostelería, con acabados resistentes",
	],
	[
		"Papelería corporativa",
		"/catalogo/papeleria-corporativa",
		"tarjetas de visita, sobres, carpetas y hojas de carta",
	],
	["Flyers y desplegables", "/catalogo/flyers-y-desplegables", "flyers, dípticos y trípticos"],
	["Folletos y revistas", "/catalogo/folletos-y-revistas", "publicaciones de varias páginas"],
	["Calendarios", "/catalogo/calendarios", "calendarios de pared, sobremesa y faldilla"],
	["Roll up", "/catalogo/roll-up", "expositores enrollables para ferias y eventos"],
	["Expositores", "/catalogo/expositores", "PLV y expositores de cartón personalizados"],
	["Cajas y packaging", "/catalogo/cajas-y-packaging", "cajas troqueladas y packaging a medida"],
	["Regalo promocional", "/catalogo/regalo-promocional", "merchandising y regalo de empresa"],
	["Carteles", "/catalogo/carteles", "carteles y gran formato"],
];

export function GET() {
	const posts = getAllPosts();

	const sections: string[] = [
		`# ${SITE_NAME}`,
		"",
		"> Imprenta en Pinto (sur de Madrid) con más de 25 años de experiencia en comunicación gráfica: impresión digital y offset, acabados y manipulados, packaging, papelería corporativa y regalo promocional, con envío a toda la península.",
		"",
		"Dinaprint es una imprenta con taller propio en el Área Empresarial Andalucía de Pinto (Madrid). Cubre el proceso completo — asesoramiento y diseño, preimpresión, impresión offset y digital (Fujifilm Jet Press 7S), acabados y manipulados, distribución y envíos — para tiradas cortas y largas. El sitio está en castellano y atiende sobre todo a empresas de Madrid capital y del sur de la región.",
		"",
		`Contacto: 678 519 403 / 678 519 404 · dinaprint@dinaprint.com · C/ Coto de Doñana, 9, Área Empresarial Andalucía, 28320 Pinto (Madrid) · Horario: ${formatBusinessHours()}. Los presupuestos se piden por formulario, teléfono o email; los precios no se publican en la web.`,
		"",
		"## Páginas principales",
		"",
		link("Inicio", "/", "presentación de la imprenta, servicios y productos destacados"),
		link(
			"Servicios",
			"/servicios",
			"asesoramiento, preimpresión, impresión offset, impresión digital, acabados y manipulados, distribución y envíos",
		),
		link("Catálogo", "/catalogo", "índice de todas las familias de producto"),
		link(
			"Sobre nosotros",
			"/sobre-nosotros",
			"historia, más de 25 años de experiencia y compromiso medioambiental",
		),
		link("Contacto", "/contacto", "formulario de presupuesto, teléfono, email y ubicación"),
		"",
		"## Zonas de servicio",
		"",
		link("Imprenta en Madrid", "/imprenta-madrid", "servicio para empresas de Madrid capital"),
		link(
			"Imprenta en el sur de Madrid",
			"/imprenta-sur-de-madrid",
			"Getafe, Parla, Valdemoro, Fuenlabrada y alrededores",
		),
		link("Imprenta en Pinto", "/imprenta-pinto", "sede y taller, con recogida en el propio local"),
		"",
		"## Catálogo de productos",
		"",
		...CATALOG_ENTRIES.map(([title, path, note]) => link(title, path, note)),
		"",
		"## Blog",
		"",
		link("Blog", "/blog", `${posts.length} artículos sobre impresión, papel, acabados y diseño`),
		...BLOG_CATEGORIES.map((category) =>
			link(
				`Categoría: ${category}`,
				`/blog/categoria/${getCategorySlug(category)}`,
				`artículos de la categoría ${category}`,
			),
		),
		"",
		"## Artículos",
		"",
		...posts.map(postLine),
		"",
		"## Optional",
		"",
		link("Aviso legal", "/aviso-legal", "datos identificativos y condiciones de uso"),
		link("Política de privacidad", "/politica-de-privacidad", "tratamiento de datos personales"),
		link("Política de cookies", "/politica-de-cookies", "cookies y analítica utilizadas"),
		"",
	];

	return new Response(sections.join("\n"), {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=0, must-revalidate",
		},
	});
}
