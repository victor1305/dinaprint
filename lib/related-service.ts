/**
 * Puente artículo → página de catálogo.
 *
 * Search Console del trimestre jun-sep 2026 dejó el problema a la vista: el
 * post de cartas y menús acumulaba 4.966 impresiones y 47 clics mientras
 * `/catalogo/cartas-y-menus` se quedaba en cero. El artículo informacional
 * capta la búsqueda y se queda ahí el usuario, sin llegar nunca a la página
 * que pide presupuesto. Mismo patrón entre el post de catálogos (1.794
 * impresiones) y `/catalogo/catalogos` (339).
 *
 * Este mapa asocia cada artículo con el producto que le corresponde para que
 * la plantilla de blog pinte un enlace destacado hacia la ficha comercial.
 * Sirve a la vez de enlazado interno: las fichas de catálogo apenas reciben
 * enlaces contextuales, solo los del pie.
 *
 * Un artículo sin entrada aquí no rompe nada: simplemente cae en el CTA
 * genérico hacia /contacto.
 */
export interface RelatedService {
	/** Ruta de la ficha de catálogo. */
	href: string;
	/** Nombre del producto tal y como se anuncia en el catálogo. */
	label: string;
	/** Frase que justifica el salto, en la voz de la página. */
	copy: string;
}

const CATALOG: Record<string, Omit<RelatedService, "copy">> = {
	cartas: { href: "/catalogo/cartas-y-menus", label: "Cartas y menús" },
	catalogos: { href: "/catalogo/catalogos", label: "Catálogos" },
	papeleria: { href: "/catalogo/papeleria-corporativa", label: "Papelería corporativa" },
	folletos: { href: "/catalogo/folletos-y-revistas", label: "Folletos y revistas" },
	flyers: { href: "/catalogo/flyers-y-desplegables", label: "Flyers y desplegables" },
	packaging: { href: "/catalogo/cajas-y-packaging", label: "Cajas y packaging" },
	carteles: { href: "/catalogo/carteles", label: "Carteles" },
	calendarios: { href: "/catalogo/calendarios", label: "Calendarios" },
	rollup: { href: "/catalogo/roll-up", label: "Roll ups" },
	expositores: { href: "/catalogo/expositores", label: "Expositores" },
	regalo: { href: "/catalogo/regalo-promocional", label: "Regalo promocional" },
};

const POST_SERVICE: Record<string, { key: keyof typeof CATALOG; copy: string }> = {
	"como-imprimir-cartas-menus-restaurantes-materiales-formatos": {
		key: "cartas",
		copy: "Imprimimos cartas y menús en Pinto, con plastificados y encuadernaciones pensados para aguantar el uso diario en sala.",
	},
	"imprimir-catalogos-productos-consejos": {
		key: "catalogos",
		copy: "Producimos catálogos en digital y offset, con la encuadernación y el papel elegidos según tirada y presupuesto.",
	},
	"como-imprimir-dossier-corporativo-presentacion-empresa": {
		key: "catalogos",
		copy: "Imprimimos dosieres y memorias corporativas con acabados de gama alta y tiradas desde una unidad.",
	},
	"como-disenar-tarjetas-visita-profesionales": {
		key: "papeleria",
		copy: "Tarjetas de visita, hojas de carta y sobres impresos en nuestro taller de Pinto, con papeles y acabados que puedes ver antes de tirar.",
	},
	"carpetas-corporativas-personalizadas-guia": {
		key: "papeleria",
		copy: "Fabricamos carpetas corporativas troqueladas a medida, con solapa, bolsillo y ranura para tarjeta.",
	},
	"sobres-personalizados-empresa-formatos-ventanas-impresion": {
		key: "papeleria",
		copy: "Imprimimos sobres personalizados en todos los formatos habituales, con y sin ventana.",
	},
	"crear-imagen-corporativa-coherente": {
		key: "papeleria",
		copy: "Producimos todo el material de una identidad de una sola vez, para que el color no baile entre piezas.",
	},
	"guia-impresion-folletos-tripticos": {
		key: "folletos",
		copy: "Imprimimos folletos y trípticos con hendido y plegado propios, que es lo que evita que el doblez rompa la tinta.",
	},
	"como-imprimir-invitaciones-boda-eventos-papeleria": {
		key: "papeleria",
		copy: "Imprimimos invitaciones y papelería de evento con papeles creativos, stamping y troquelados.",
	},
	"ideas-packaging-destacar-producto": {
		key: "packaging",
		copy: "Fabricamos cajas y packaging a medida, del prototipo troquelado a la tirada completa.",
	},
	"como-preparar-arte-final-troquel-cajas-packaging": {
		key: "packaging",
		copy: "Te pasamos el troquel en vectorial antes de que montes el arte final, y revisamos el archivo en preimpresión.",
	},
	"roll-up-expositor-ferias-eventos": {
		key: "rollup",
		copy: "Roll ups con estructura de aluminio, gráfica impresa y bolsa de transporte, listos en 48-72 h.",
	},
	"plv-expositores-carton-personalizados-guia": {
		key: "expositores",
		copy: "Fabricamos expositores de cartón de mostrador, suelo y lineal, montados y listos para el punto de venta.",
	},
	"merchandising-empresas-ideas-regalos": {
		key: "regalo",
		copy: "Personalizamos regalo promocional con serigrafía, tampografía, láser y bordado.",
	},
	"calendario-editorial-impresos-marketing": {
		key: "calendarios",
		copy: "Imprimimos calendarios de pared, sobremesa y bolsillo, con espiral o wire-o.",
	},
	"impresion-gran-formato-lonas-vinilos": {
		key: "carteles",
		copy: "Imprimimos carteles, lonas y vinilos en gran formato, con laminados para interior y exterior.",
	},
	"photocall-personalizado-como-disenar-imprimir-materiales": {
		key: "carteles",
		copy: "Producimos photocalls en lona o vinilo, con estructura y montaje si lo necesitas.",
	},
	"senaletica-personalizada-materiales-normativa-consejos": {
		key: "carteles",
		copy: "Imprimimos señalética en vinilo, PVC, dibond y metacrilato, cortada a la forma que necesites.",
	},
	"tipos-de-encuadernacion-guia-elegir": {
		key: "catalogos",
		copy: "Encuadernamos en el taller: grapa, fresado, cosido, wire-o y espiral, sin depender de terceros.",
	},
	"acabados-de-impresion-guia-completa": {
		key: "catalogos",
		copy: "Plastificados, barnices UVI, stamping, relieve y troquelados, todo bajo el mismo techo en Pinto.",
	},
	"tipos-de-papel-para-impresion": {
		key: "papeleria",
		copy: "Puedes venir al taller a ver y tocar el papel antes de decidir, que es mejor que fiarse de una pantalla.",
	},
	"como-preparar-archivos-para-imprenta": {
		key: "papeleria",
		copy: "Revisamos gratis tus archivos en preimpresión antes de tirar: sangre, resolución, tintas y tipografías.",
	},
	"errores-comunes-enviar-archivos-imprenta": {
		key: "papeleria",
		copy: "Revisamos gratis tus archivos en preimpresión y te avisamos antes de que el error salga impreso.",
	},
	"impresion-offset-vs-digital-diferencias": {
		key: "catalogos",
		copy: "Tenemos las dos tecnologías en casa, así que te decimos cuál sale a cuenta para tu tirada sin barrer para dentro.",
	},
	"impresion-offset-que-es-como-funciona": {
		key: "catalogos",
		copy: "Imprimimos en offset a partir de la tirada en que compensa, y en digital por debajo.",
	},
	"tecnicas-de-impresion-cual-elegir-cada-trabajo": {
		key: "catalogos",
		copy: "Te asesoramos sobre la técnica adecuada para tu trabajo antes de presupuestar.",
	},
	"impresion-sostenible-opciones-ecologicas": {
		key: "catalogos",
		copy: "Trabajamos con papeles reciclados y certificados FSC, y con tintas vegetales.",
	},
	"impresion-sostenible-empresas-decisiones-compra": {
		key: "catalogos",
		copy: "Trabajamos con papeles certificados FSC y tintas vegetales, y te lo documentamos en el presupuesto.",
	},
	"impresion-pegatinas-etiquetas-uv-latex-solvente-como-elegir": {
		key: "carteles",
		copy: "Imprimimos pegatinas y etiquetas con corte a forma, en vinilo, papel y materiales de exterior.",
	},
	"etiquetas-adhesivas-personalizadas-guia-materiales-adhesivos-acabados": {
		key: "carteles",
		copy: "Producimos etiquetas adhesivas troqueladas a medida, en hoja o en bobina.",
	},
	"etiquetas-en-rollo-pegatinas-bobina-guia": {
		key: "carteles",
		copy: "Servimos etiquetas en bobina con el mandril y el sentido de salida que pida tu aplicadora.",
	},
	"talonarios-autocopiativos-ncr-guia-copias-numeracion": {
		key: "papeleria",
		copy: "Imprimimos talonarios autocopiativos numerados, encolados y con juegos de dos, tres o cuatro copias.",
	},
	"como-imprimir-cheques-regalo-tarjetas-regalo-personalizadas": {
		key: "papeleria",
		copy: "Imprimimos cheques y tarjetas regalo con numeración correlativa, troquelado y medidas de seguridad.",
	},
	"vinilos-para-vehiculos-rotulacion-coches-furgonetas-guia": {
		key: "carteles",
		copy: "Imprimimos vinilo de rotulación con laminado de protección para flotas y vehículos comerciales.",
	},
	"impresion-textil-serigrafia-dtf-dtg-vinilo-guia": {
		key: "regalo",
		copy: "Personalizamos ropa corporativa y textil promocional con la técnica que mejor encaje con tu tirada.",
	},
};

/** Ficha de catálogo asociada a un artículo, si la hay. */
export function getRelatedService(slug: string): RelatedService | null {
	const entry = POST_SERVICE[slug];
	if (!entry) return null;
	const target = CATALOG[entry.key];
	return { href: target.href, label: target.label, copy: entry.copy };
}
