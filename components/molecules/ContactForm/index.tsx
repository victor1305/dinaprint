"use client";

import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

/**
 * Estado del envío. Antes solo había un booleano `formSent` que se ponía a true
 * nada más disparar la petición, así que el visitante veía "Formulario enviado!"
 * aunque el correo hubiese fallado. De ahí que el fallo de EmailJS pasara meses
 * inadvertido. Ahora el éxito solo se pinta cuando el servidor lo confirma.
 */
type SendStatus = "idle" | "sending" | "sent" | "error";

/**
 * Reto anti-robots servido por `GET /api/contacto`. La suma correcta no viaja
 * aquí: va dentro de la firma del token, y solo el servidor puede comprobarla.
 * La versión anterior sorteaba los números en el navegador, así que un bot que
 * llamara al endpoint directamente se saltaba la comprobación entera.
 */
type Challenge = { first: number; second: number; challenge: string };

const ContactForm: React.FC = () => {
	const [validationNumber, setValidationNumber] = useState(0);
	const [validationError, setValidationError] = useState(false);
	const [challenge, setChallenge] = useState<Challenge | null>(null);
	const [status, setStatus] = useState<SendStatus>("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const [privacyAccepted, setPrivacyAccepted] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		// Trampa para bots; se queda vacío salvo que lo rellene un robot.
		company: "",
	});

	const [formErrors, setFormErrors] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
		privacy: false,
	});

	const validateForm = () => {
		setFormErrors({
			name: !form.name.trim().length,
			email: !form.email.trim().length,
			phone: !form.phone.trim().length,
			message: !form.message.trim().length,
			privacy: !privacyAccepted,
		});

		return Boolean(
			form.name.trim().length &&
				form.email.trim().length &&
				form.phone.trim().length &&
				form.message.trim().length &&
				privacyAccepted,
		);
	};

	const resetForm = () => {
		setForm({ name: "", email: "", phone: "", message: "", company: "" });
		setFormErrors({
			name: false,
			email: false,
			phone: false,
			message: false,
			privacy: false,
		});
		setPrivacyAccepted(false);
		setValidationError(false);
		setValidationNumber(0);
	};

	// Cada reto es de un solo uso, así que se pide uno nuevo al montar y otro
	// después de cada envío, salga bien o mal.
	const loadChallenge = useCallback(async () => {
		try {
			const response = await fetch("/api/contacto", { cache: "no-store" });
			if (!response.ok) throw new Error("challenge");
			setChallenge(await response.json());
		} catch {
			setChallenge(null);
		}
	}, []);

	const sendForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (status === "sending") return;

		// Las dos comprobaciones se ejecutan siempre, para enseñar de una vez
		// todo lo que falta en vez de ir revelándolo de uno en uno. La suma se
		// vuelve a verificar en el servidor: esto es solo para avisar antes.
		const sumIsWrong = !challenge || challenge.first + challenge.second !== validationNumber;
		setValidationError(sumIsWrong);
		const fieldsAreValid = validateForm();
		if (sumIsWrong || !fieldsAreValid || !challenge) return;

		setStatus("sending");
		setErrorMessage("");

		try {
			const response = await fetch("/api/contacto", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					...form,
					privacy: privacyAccepted,
					challenge: challenge.challenge,
					answer: validationNumber,
				}),
			});

			if (!response.ok) {
				const data = await response.json().catch(() => ({}));
				setErrorMessage(
					typeof data.error === "string"
						? data.error
						: "No hemos podido enviar el mensaje. Inténtalo de nuevo o llámanos.",
				);
				setStatus("error");
				loadChallenge();
				return;
			}

			setStatus("sent");
			resetForm();
			loadChallenge();
		} catch {
			setErrorMessage(
				"No hemos podido conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.",
			);
			setStatus("error");
			loadChallenge();
		}
	};

	useEffect(() => {
		loadChallenge();
	}, [loadChallenge]);

	return (
		<div className="m-[5%] p-[10%] mx-auto rounded-[10px] shadow-findBox max-w-[600px] min-[650px]:p-10 lg:my-0">
			<form className="w-full mx-auto">
				<input
					className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
					placeholder="Nombre"
					name="name"
					onChange={(e) => setForm({ ...form, name: e.target.value })}
					value={form.name}
				/>
				{formErrors.name && <p className="text-sm text-red-600 px-4 pb-2.5">Indicanos tu nombre</p>}
				<input
					className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
					placeholder="Email"
					name="email"
					type="email"
					onChange={(e) => setForm({ ...form, email: e.target.value })}
					value={form.email}
				/>
				{formErrors.email && (
					<p className="text-sm text-red-600 px-4 pb-2.5">Necesitamos tu email</p>
				)}
				<input
					className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
					placeholder="Teléfono"
					name="phone"
					onChange={(e) => setForm({ ...form, phone: e.target.value })}
					value={form.phone}
				/>
				{formErrors.phone && (
					<p className="text-sm text-red-600 px-4 pb-2.5">Es necesario un teléfono válido</p>
				)}
				<textarea
					className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
					placeholder="Mensaje"
					name="message"
					onChange={(e) => setForm({ ...form, message: e.target.value })}
					value={form.message}
				/>
				{formErrors.message && (
					<p className="text-sm text-red-600 px-4 pb-2.5">Nos falta el mensaje</p>
				)}
				{/* Honeypot: invisible y fuera del recorrido de tabulación. */}
				<input
					className="hidden"
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
					name="company"
					onChange={(e) => setForm({ ...form, company: e.target.value })}
					value={form.company}
				/>
				<div className="m-2.5 px-1">
					<label className="flex items-start gap-2 text-sm text-[#262626]">
						<input
							type="checkbox"
							name="privacy"
							className="mt-1"
							checked={privacyAccepted}
							onChange={(e) => {
								setPrivacyAccepted(e.target.checked);
								if (e.target.checked) {
									setFormErrors((prev) => ({ ...prev, privacy: false }));
								}
							}}
						/>
						<span>
							He leido y acepto la{" "}
							<Link
								href="/politica-de-privacidad"
								className="text-primary underline hover:no-underline"
							>
								politica de privacidad
							</Link>
						</span>
					</label>
					{formErrors.privacy && (
						<p className="text-sm text-red-600 pt-2">Debes aceptar la politica de privacidad</p>
					)}
				</div>
				{status !== "sent" ? (
					<>
						<div className="m-2.5 flex flex-col min-[375px]:flex-row w-full items-center justify-between mx-auto">
							<p>
								<span>
									{challenge ? `${challenge.first} + ${challenge.second} =` : "Cargando..."}
								</span>
								<input
									type="text"
									className="w-[50px] py-2.5 px-4 m-2.5 bg-[#f2f3f4]"
									onChange={(e) => setValidationNumber(Number.parseInt(e.target.value))}
									value={validationNumber || ""}
								/>
							</p>
							<button
								type="button"
								disabled={status === "sending" || !challenge}
								className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
								onClick={sendForm}
							>
								{status === "sending" ? "ENVIANDO..." : "ENVIAR"}
							</button>
						</div>
						{validationError && (
							<p className="text-sm text-red-600">Necesitamos que resuelvas la suma</p>
						)}
						{status === "error" && (
							<p className="text-sm text-red-600 mt-2.5" role="alert">
								{errorMessage}
							</p>
						)}
					</>
				) : (
					<output className="block text-center text-green-600 font-medium mt-2.5">
						Formulario enviado!
					</output>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
