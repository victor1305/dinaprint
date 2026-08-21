/**
 * Endpoint de salud para el healthcheck de Coolify/Docker.
 *
 * Devuelve 200 con el cuerpo exacto "OK" para que la comprobación no dependa
 * del HTML de la home (más pesado de renderizar y sin texto fijo que buscar).
 */
export const dynamic = "force-dynamic";

export function GET() {
	return new Response("OK", {
		status: 200,
		headers: {
			"content-type": "text/plain; charset=utf-8",
			"cache-control": "no-store",
		},
	});
}
