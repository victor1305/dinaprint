'use client';

import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';

const ContactForm: React.FC = () => {
  const [validationNumber, setValidationNumber] = useState(0);
  const [validationError, setValidationError] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    setFormErrors({
      name: !form.name.trim().length,
      email: !form.email.trim().length,
      phone: !form.phone.trim().length,
      message: !form.message.trim().length
    });

    return (
      form.name.length &&
      form.email.length &&
      form.phone.length &&
      form.message.length
    );
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setFormErrors({
      name: false,
      email: false,
      phone: false,
      message: false
    });
    setFirstNumber(Math.floor(Math.random() * 10));
    setSecondNumber(Math.floor(Math.random() * 10));
    setValidationError(false);
    setValidationNumber(0);
  };

  const sendForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValidationError(firstNumber + secondNumber !== validationNumber);
    if (firstNumber + secondNumber !== validationNumber) return;
    if (!validateForm()) return;
    //AQUÍ ENVÍO EL FORMULARIO
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_FORM_SERVICE as string,
          process.env.NEXT_PUBLIC_FORM_TEMPLATE as string,
          formRef.current,
          process.env.NEXT_PUBLIC_FORM_KEY as string
        )
        .then((result) => console.log(result)),
        (error: Error) => console.log(error);
      setFormSent(true);
      resetForm();
    }
  };

  useEffect(() => {
    setFirstNumber(Math.floor(Math.random() * 10));
    setSecondNumber(Math.floor(Math.random() * 10));
  }, []);

  return (
    <div className="m-[5%] p-[10%] mx-auto rounded-[10px] shadow-findBox max-w-[600px] min-[650px]:p-10 lg:my-0">
      <form ref={formRef} className="w-full mx-auto">
        <input
          className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
          placeholder="Nombre"
          name="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          value={form.name}
        />
        {formErrors.name && (
          <p className="text-sm text-red-600 px-4 pb-2.5">
            Indicanos tu nombre
          </p>
        )}
        <input
          className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
          placeholder="Email"
          name="email"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />
        {formErrors.email && (
          <p className="text-sm text-red-600 px-4 pb-2.5">
            Necesitamos tu email
          </p>
        )}
        <input
          className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
          placeholder="Teléfono"
          name="phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          value={form.phone}
        />
        {formErrors.phone && (
          <p className="text-sm text-red-600 px-4 pb-2.5">
            Es necesario un teléfono válido
          </p>
        )}
        <textarea
          className="w-full py-2.5 px-4 m-2.5 bg-[#f2f3f4] mx-auto"
          placeholder="Mensaje"
          name="message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          value={form.message}
        />
        {formErrors.message && (
          <p className="text-sm text-red-600 px-4 pb-2.5">
            Nos falta el mensaje
          </p>
        )}
        {!formSent ? (
          <>
            <div className="m-2.5 flex flex-col min-[375px]:flex-row w-full items-center justify-between mx-auto">
              <p>
                <span>
                  {firstNumber} + {secondNumber} =
                </span>
                <input
                  type="text"
                  className="w-[50px] py-2.5 px-4 m-2.5 bg-[#f2f3f4]"
                  onChange={(e) =>
                    setValidationNumber(parseInt(e.target.value))
                  }
                  value={validationNumber || ''}
                />
              </p>
              <button
                className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  sendForm(e)
                }
              >
                ENVIAR
              </button>
            </div>
            {validationError && (
              <p className="text-sm text-red-600">
                Necesitamos que resuelvas la suma
              </p>
            )}
          </>
        ) : (
          <p className="text-center text-green-600 font-medium mt-2.5">
            Formulario enviado!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
