import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { formatBusinessHours } from "@/lib/hours";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Formulario de contacto: aviso interno + acuse de recibo al visitante.
 *
 * Sustituye a EmailJS, que enviaba desde el cliente con las credenciales
 * incrustadas en el bundle y dependía de un token OAuth de Gmail que caducó
 * sin avisar ("Gmail_API: Invalid grant"). Aquí las credenciales son
 * variables de servidor (sin NEXT_PUBLIC_) y nunca llegan al navegador.
 *
 * Variables necesarias en Coolify, como variables normales de runtime —no de
 * build—, porque solo se leen al atender la petición:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD
 *   CONTACT_TO    destinatario de los avisos (por defecto, SMTP_USER)
 *   CONTACT_FROM  remitente visible; puede ser un alias distinto de SMTP_USER,
 *                 pero Gmail lo ignora y reescribe el From si ese alias no está
 *                 dado de alta en "Enviar mensaje como". Debe ser del dominio
 *                 propio o SPF lo rechaza.
 *   CONTACT_SECRET  opcional; clave para firmar el captcha (ver más abajo)
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_LENGTHS = {
	name: 100,
	email: 150,
	phone: 30,
	message: 5000,
} as const;

/**
 * Clave para firmar el captcha. Si no se define CONTACT_SECRET se genera una
 * por proceso: sirve igual, con la única pega de que un reinicio invalida los
 * retos ya servidos y quien estuviera rellenando el formulario tiene que pedir
 * otro. Con varias réplicas sí haría falta fijarla, porque cada una firmaría
 * con una clave distinta.
 */
const CAPTCHA_SECRET = process.env.CONTACT_SECRET || randomBytes(32).toString("hex");

/** Margen de vida del reto: ni instantáneo (bot) ni caducado. */
const CAPTCHA_MIN_AGE_MS = 3 * 1000;
const CAPTCHA_MAX_AGE_MS = 30 * 60 * 1000;

/** Nonces ya gastados, para que un reto resuelto no se pueda reutilizar. */
const usedNonces = new Map<string, number>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

const signChallenge = (answer: number, issuedAt: number, nonce: string) =>
	createHmac("sha256", CAPTCHA_SECRET).update(`${answer}.${issuedAt}.${nonce}`).digest("hex");

/**
 * Comprueba el reto sin que la solución viaje nunca al cliente.
 *
 * El token solo lleva el instante y un nonce; la suma correcta está metida en
 * la firma. El servidor vuelve a firmar con la respuesta que envía el usuario y
 * compara: si coincide, es que ha acertado. Así el captcha deja de ser
 * decorativo. Antes la suma se comprobaba solo en el navegador, de modo que un
 * bot que llamara directamente a este endpoint se la saltaba entera.
 */
const isValidChallenge = (challenge: unknown, answer: unknown) => {
	if (typeof challenge !== "string" || typeof answer !== "number" || !Number.isFinite(answer)) {
		return false;
	}

	const parts = challenge.split(".");
	if (parts.length !== 3) return false;

	const [issuedAtRaw, nonce, signature] = parts;
	const issuedAt = Number.parseInt(issuedAtRaw, 10);
	if (!(Number.isFinite(issuedAt) && nonce && signature)) return false;

	const age = Date.now() - issuedAt;
	if (age < CAPTCHA_MIN_AGE_MS || age > CAPTCHA_MAX_AGE_MS) return false;

	if (usedNonces.has(nonce)) return false;

	const expected = signChallenge(answer, issuedAt, nonce);
	const given = Buffer.from(signature, "utf8");
	const wanted = Buffer.from(expected, "utf8");
	if (given.length !== wanted.length || !timingSafeEqual(given, wanted)) return false;

	// Purga de nonces caducados y marcado del recién usado.
	const now = Date.now();
	usedNonces.forEach((timestamp, key) => {
		if (now - timestamp > CAPTCHA_MAX_AGE_MS) usedNonces.delete(key);
	});
	usedNonces.set(nonce, now);

	return true;
};

const isRateLimited = (ip: string) => {
	const now = Date.now();
	const hits = (recentSubmissions.get(ip) ?? []).filter(
		(timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
	);

	// Purga de claves viejas para que el Map no crezca sin fin. Se recorre con
	// forEach y no con for...of porque el target del proyecto es es5 y la
	// iteración de un Map exigiría activar downlevelIteration para todo.
	recentSubmissions.forEach((timestamps, key) => {
		if (timestamps.every((timestamp) => now - timestamp >= RATE_LIMIT_WINDOW_MS)) {
			recentSubmissions.delete(key);
		}
	});

	if (hits.length >= RATE_LIMIT_MAX) {
		recentSubmissions.set(ip, hits);
		return true;
	}

	hits.push(now);
	recentSubmissions.set(ip, hits);
	return false;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

/** Evita que un salto de línea en un campo inyecte cabeceras extra en el correo. */
const sanitizeHeader = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const escapeHtml = (value: string) =>
	value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Teléfono que se ofrece en el acuse de recibo. Es solo el 404, que es también
 * el de WhatsApp: la ficha de contacto (`findBoxes`) agrupa los dos números en
 * una sola cadena y no sirve aquí.
 */
const AUTO_REPLY_PHONE = { display: "678 519 404", tel: "+34678519404" };

const hostnameOf = (value: string) => {
	try {
		return new URL(value).hostname.toLowerCase();
	} catch {
		return "";
	}
};

const isAllowedOrigin = (origin: string, request: NextRequest) => {
	const originHost = hostnameOf(origin);
	if (!originHost) return false;

	const allowed = new Set<string>();

	const headerHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
	if (headerHost) allowed.add(headerHost.split(":")[0].toLowerCase());

	const siteHost = hostnameOf(process.env.NEXT_PUBLIC_SITE_URL || "https://dinaprint.com");
	if (siteHost) {
		allowed.add(siteHost);
		// `www` se redirige al apex con un 308, pero si alguien llega por ahí
		// el envío no tiene por qué caerse.
		allowed.add(siteHost.startsWith("www.") ? siteHost.slice(4) : `www.${siteHost}`);
	}

	return allowed.has(originHost);
};

/**
 * Entrega un reto nuevo. El cliente lo pide al montar el formulario y otra vez
 * después de cada envío, porque el nonce es de un solo uso.
 */
export function GET() {
	const first = Math.floor(Math.random() * 10);
	const second = Math.floor(Math.random() * 10);
	const issuedAt = Date.now();
	const nonce = randomBytes(12).toString("hex");
	const signature = signChallenge(first + second, issuedAt, nonce);

	return NextResponse.json(
		{ first, second, challenge: `${issuedAt}.${nonce}.${signature}` },
		{ headers: { "cache-control": "no-store" } },
	);
}

export async function POST(request: NextRequest) {
	const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO, CONTACT_FROM } = process.env;

	if (!(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASSWORD)) {
		console.error("[contacto] faltan variables SMTP en el entorno");
		return NextResponse.json(
			{ error: "El envío no está configurado en el servidor." },
			{ status: 500 },
		);
	}

	// Un navegador manda Origin en un POST aunque sea del mismo sitio. Se
	// rechaza solo si viene y no cuadra: así no se rompe ningún cliente
	// legítimo que lo omita, pero se corta el POST cruzado desde otra página.
	//
	// La comparación es contra la cabecera Host y el dominio configurado, y solo
	// por nombre de máquina. `request.url` NO sirve: en la salida standalone
	// siempre dice `http://localhost:<puerto>`, así que detrás del proxy de
	// Coolify no coincidiría nunca con `https://dinaprint.com` y el formulario
	// quedaría rechazando todos los envíos buenos.
	const origin = request.headers.get("origin");
	if (origin && !isAllowedOrigin(origin, request)) {
		return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
	}

	let payload: Record<string, unknown>;
	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ error: "Petición mal formada." }, { status: 400 });
	}

	// Trampa para bots: el campo va oculto, una persona nunca lo rellena.
	// Se responde 200 a propósito, para no enseñarles que han sido detectados.
	if (typeof payload.company === "string" && payload.company.length > 0) {
		return NextResponse.json({ ok: true }, { status: 200 });
	}

	const name = typeof payload.name === "string" ? payload.name.trim() : "";
	const email = typeof payload.email === "string" ? payload.email.trim() : "";
	const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
	const message = typeof payload.message === "string" ? payload.message.trim() : "";
	const privacy = payload.privacy === true;

	if (!(name && email && phone && message)) {
		return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
	}

	if (!privacy) {
		return NextResponse.json(
			{ error: "Debes aceptar la política de privacidad." },
			{ status: 400 },
		);
	}

	if (!isValidEmail(email)) {
		return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
	}

	if (
		name.length > MAX_LENGTHS.name ||
		email.length > MAX_LENGTHS.email ||
		phone.length > MAX_LENGTHS.phone ||
		message.length > MAX_LENGTHS.message
	) {
		return NextResponse.json({ error: "Algún campo es demasiado largo." }, { status: 400 });
	}

	if (!isValidChallenge(payload.challenge, payload.answer)) {
		return NextResponse.json(
			{ error: "La comprobación anti-robots no es válida. Vuelve a intentarlo." },
			{ status: 400 },
		);
	}

	const ip =
		request.headers.get("cf-connecting-ip") ??
		request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
		"desconocida";

	if (isRateLimited(ip)) {
		return NextResponse.json(
			{ error: "Demasiados envíos seguidos. Inténtalo de nuevo en unos minutos." },
			{ status: 429 },
		);
	}

	const port = Number.parseInt(SMTP_PORT, 10);
	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port,
		// 465 es SMTPS (TLS desde el saludo); 587 arranca en claro y sube con STARTTLS.
		secure: port === 465,
		auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
	});

	// El remitente es siempre el buzón propio: si se pusiera el del visitante,
	// SPF y DKIM no cuadrarían y el aviso caería en spam.
	const from = `"Dinaprint" <${CONTACT_FROM || SMTP_USER}>`;
	const inbox = CONTACT_TO || SMTP_USER;
	const receivedAt = new Intl.DateTimeFormat("es-ES", {
		dateStyle: "full",
		timeStyle: "short",
		timeZone: "Europe/Madrid",
	}).format(new Date());

	try {
		await transporter.sendMail({
			from,
			to: inbox,
			// Responder al aviso escribe directamente al cliente.
			replyTo: `${sanitizeHeader(name)} <${sanitizeHeader(email)}>`,
			subject: `Nuevo contacto desde la web: ${sanitizeHeader(name)}`,
			text: [
				`Nombre: ${name}`,
				`Email: ${email}`,
				`Teléfono: ${phone}`,
				`Recibido: ${receivedAt}`,
				"",
				"Mensaje:",
				message,
			].join("\n"),
			html: `
				<h2>Nuevo contacto desde dinaprint.com</h2>
				<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
				<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
				<p><strong>Teléfono:</strong> <a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}">${escapeHtml(phone)}</a></p>
				<p><strong>Recibido:</strong> ${escapeHtml(receivedAt)}</p>
				<hr />
				<p><strong>Mensaje:</strong></p>
				<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
			`,
		});
	} catch (error) {
		// El detalle se queda en el log del contenedor: al visitante no se le
		// cuenta nada del servidor de correo.
		console.error("[contacto] fallo al enviar el aviso interno por SMTP:", error);
		return NextResponse.json(
			{ error: "No hemos podido enviar el mensaje. Inténtalo de nuevo o llámanos." },
			{ status: 502 },
		);
	}

	// Acuse de recibo al visitante. Va en su propio try: si falla, el aviso
	// interno ya salió y el contacto no se pierde, así que no se le devuelve
	// error a quien acaba de escribir.
	try {
		await transporter.sendMail({
			from,
			to: `${sanitizeHeader(name)} <${sanitizeHeader(email)}>`,
			// Si el cliente responde al acuse, la respuesta llega al buzón.
			replyTo: inbox,
			subject: "Hemos recibido tu mensaje | Dinaprint",
			// Cabeceras estándar de respuesta automática: evitan que el
			// autorespondedor del destinatario conteste y monte un bucle.
			headers: {
				"Auto-Submitted": "auto-replied",
				"X-Auto-Response-Suppress": "All",
			},
			text: [
				`Hola ${name}:`,
				"",
				"Hemos recibido tu mensaje y te contactaremos a la mayor brevedad.",
				"",
				`Si prefieres hablarlo por teléfono: ${AUTO_REPLY_PHONE.display}`,
				`Horario: ${formatBusinessHours()}`,
				"",
				"Esta es una copia de lo que nos has enviado:",
				message,
				"",
				"Un saludo,",
				"Equipo Dinaprint",
				"C/ Coto de Doñana, 9. Área Empresarial Andalucía. 28320 Pinto, Madrid",
			].join("\n"),
			html: `
				<p>Hola ${escapeHtml(name)}:</p>
				<p>Hemos recibido tu mensaje y <strong>te contactaremos a la mayor brevedad</strong>.</p>
				<p>Si prefieres hablarlo por teléfono: <strong><a href="tel:${AUTO_REPLY_PHONE.tel}">${AUTO_REPLY_PHONE.display}</a></strong><br />
				Horario: ${escapeHtml(formatBusinessHours())}</p>
				<hr />
				<p><strong>Esta es una copia de lo que nos has enviado:</strong></p>
				<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
				<hr />
				<p>Un saludo,<br />
				<strong>Equipo Dinaprint</strong><br />
				C/ Coto de Doñana, 9. Área Empresarial Andalucía. 28320 Pinto, Madrid</p>
			`,
		});
	} catch (error) {
		console.error("[contacto] el aviso interno salió, pero falló el acuse al visitante:", error);
	}

	return NextResponse.json({ ok: true }, { status: 200 });
}
