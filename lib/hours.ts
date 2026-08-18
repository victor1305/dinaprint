/**
 * Fuente única del horario comercial.
 *
 * Estaba repetido en cuatro sitios (schema, pie, contacto y bloque de
 * ubicación) y ya provocó una discrepancia real: la web decía 08:00 y la ficha
 * de Google 09:00. Todo lo que muestre o compruebe el horario debe salir de
 * aquí.
 */

/** Zona horaria del negocio. Determina qué "ahora" cuenta, no la del visitante. */
export const BUSINESS_TIMEZONE = "Europe/Madrid";

/** Franja de un día. `open`/`close` en minutos desde medianoche. */
interface DaySchedule {
	open: number;
	close: number;
}

const at = (hour: number, minute = 0) => hour * 60 + minute;

/** Índice 0 = domingo, 6 = sábado (igual que `Date.getDay`). */
export const WEEK_SCHEDULE: (DaySchedule | null)[] = [
	null, // domingo
	{ open: at(9), close: at(18) }, // lunes
	{ open: at(9), close: at(18) }, // martes
	{ open: at(9), close: at(18) }, // miércoles
	{ open: at(9), close: at(18) }, // jueves
	{ open: at(9), close: at(15) }, // viernes
	null, // sábado
];

const SCHEMA_DAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
] as const;

const pad = (n: number) => String(n).padStart(2, "0");
const toClock = (minutes: number) => `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
/** Sin cero a la izquierda, que es como se escribe en castellano corriente. */
const toHuman = (minutes: number) => `${Math.floor(minutes / 60)}:${pad(minutes % 60)}`;

/**
 * Minutos transcurridos hoy y día de la semana, **en la zona del negocio**.
 *
 * No se puede usar `new Date().getHours()`: devolvería la hora local del
 * visitante, así que alguien en Bogotá vería el negocio abierto a deshora.
 */
export function nowInBusinessZone(now: Date = new Date()): { day: number; minutes: number } {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: BUSINESS_TIMEZONE,
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23",
	}).formatToParts(now);

	const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));

	return { day, minutes: at(Number(get("hour")), Number(get("minute"))) };
}

/** ¿Está el negocio abierto en este momento? */
export function isOpenNow(now: Date = new Date()): boolean {
	const { day, minutes } = nowInBusinessZone(now);
	const schedule = WEEK_SCHEDULE[day];

	if (!schedule) return false;
	return minutes >= schedule.open && minutes < schedule.close;
}

/** Texto para mostrar, agrupando los días con el mismo horario. */
export function formatBusinessHours(separator = " · "): string {
	const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
	const groups: { from: number; to: number; schedule: DaySchedule }[] = [];

	for (let day = 1; day <= 6; day++) {
		const schedule = WEEK_SCHEDULE[day];
		if (!schedule) continue;
		const last = groups[groups.length - 1];
		if (last && last.schedule.open === schedule.open && last.schedule.close === schedule.close) {
			last.to = day;
		} else {
			groups.push({ from: day, to: day, schedule });
		}
	}

	return groups
		.map(({ from, to, schedule }) => {
			const days = from === to ? DAY_NAMES[from] : `${DAY_NAMES[from]} a ${DAY_NAMES[to]}`;
			const label = days.charAt(0).toUpperCase() + days.slice(1);
			return `${label} de ${toHuman(schedule.open)} a ${toHuman(schedule.close)}`;
		})
		.join(separator);
}

/** `openingHoursSpecification` de schema.org derivado del mismo horario. */
export function getOpeningHoursSchema() {
	const groups: { days: string[]; schedule: DaySchedule }[] = [];

	for (let day = 0; day < 7; day++) {
		const schedule = WEEK_SCHEDULE[day];
		if (!schedule) continue;
		const last = groups[groups.length - 1];
		if (last && last.schedule.open === schedule.open && last.schedule.close === schedule.close) {
			last.days.push(SCHEMA_DAYS[day]);
		} else {
			groups.push({ days: [SCHEMA_DAYS[day]], schedule });
		}
	}

	return groups.map(({ days, schedule }) => ({
		"@type": "OpeningHoursSpecification",
		dayOfWeek: days.length === 1 ? days[0] : days,
		opens: toClock(schedule.open),
		closes: toClock(schedule.close),
	}));
}
