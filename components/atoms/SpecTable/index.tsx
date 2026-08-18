export interface SpecRow {
	label: string;
	value: string;
}

interface SpecTableProps {
	title?: string;
	caption?: string;
	rows: SpecRow[];
}

/**
 * Tabla de especificaciones técnicas de un producto.
 *
 * Es contenido único que ningún competidor puede copiar y responde a las dudas
 * (formatos, gramajes, plazos, tirada mínima) que el usuario resuelve antes de
 * pedir presupuesto.
 */
const SpecTable = ({ title = "Especificaciones", caption, rows }: SpecTableProps) => (
	<section className="pt-10">
		<h2 className="text-2xl lg:text-3xl font-semibold text-secondary pb-4">{title}</h2>
		{caption && <p className="pb-5 text-base lg:text-lg">{caption}</p>}
		<div className="overflow-x-auto rounded-xl shadow-findBox bg-white">
			<table className="w-full text-left border-collapse min-w-[520px]">
				<tbody>
					{rows.map((row, index) => (
						<tr
							key={row.label}
							className={index < rows.length - 1 ? "border-b border-gray-200" : undefined}
						>
							<th scope="row" className="align-top py-3 px-5 font-semibold w-[38%] text-secondary">
								{row.label}
							</th>
							<td className="align-top py-3 px-5">{row.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</section>
);

export default SpecTable;
