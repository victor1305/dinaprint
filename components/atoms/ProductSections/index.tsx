export interface ProductSection {
	/** Encabezado de la sección. Se pinta como H2. */
	title: string;
	/** Párrafos del cuerpo. Admiten HTML sencillo (<b>, <em>). */
	body: string[];
	/** Lista opcional que cierra la sección. */
	list?: string[];
}

interface ProductSectionsProps {
	sections: ProductSection[];
}

/**
 * Contenido extenso y propio de cada ficha de catálogo.
 *
 * Las fichas cortas rondaban las 700 palabras y competían por términos
 * nacionales de cabecera desde la posición 40-70. Este bloque existe para que
 * cada ficha tenga criterio propio —cuándo conviene cada material, qué se
 * suele pedir mal, qué hay que decidir antes de presupuestar— en lugar de
 * repetir la misma descripción genérica que todas las demás imprentas.
 */
const ProductSections = ({ sections }: ProductSectionsProps) => (
	<section className="px-5 pt-10 mx-auto max-w-[1200px]">
		{sections.map((section) => (
			<div key={section.title} className="pt-8 first:pt-0">
				<h2 className="text-xl lg:text-2xl font-semibold text-secondary">{section.title}</h2>
				{section.body.map((paragraph) => (
					<p
						key={paragraph.slice(0, 60)}
						className="pt-4 text-base lg:text-lg text-gray-700"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: copy redactada en el repo, no entrada de usuario
						dangerouslySetInnerHTML={{ __html: paragraph }}
					/>
				))}
				{section.list && section.list.length > 0 && (
					<ul className="list-disc pl-5 pt-4 space-y-2 text-gray-700">
						{section.list.map((item) => (
							<li
								key={item.slice(0, 60)}
								// biome-ignore lint/security/noDangerouslySetInnerHtml: copy redactada en el repo, no entrada de usuario
								dangerouslySetInnerHTML={{ __html: item }}
							/>
						))}
					</ul>
				)}
			</div>
		))}
	</section>
);

export default ProductSections;
