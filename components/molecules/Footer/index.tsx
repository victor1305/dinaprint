import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <div className="bg-footer-bg px-2.5 py-5">
      <div className='max-w-[1300px] mx-auto'>
        <div>
          <Link href={'/'}>
            <Image
              src="/logo-dinaprint-final-02.png"
              className="cursor-pointer"
              alt="logo Dinaprint"
              width={240}
              height={58}
            />
          </Link>
        </div>
        <div className="text-sm lg:flex lg:pt-3">
          <p className="p-2.5 lg:w-1/5">
            Gracias a las nuevas tecnologías, podemos ofrecer a nuestros
            clientes la oportunidad de materializar cualquier proyecto de
            impresión que requiera su negocio, ya sea grande o pequeño.
          </p>
          <div className="p-2.5 pb-0 lg:pb-2.5 lg:w-1/5">
            <h4 className="text-base font-semibold">CATÁLOGO</h4>
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo"
                className="text-footer-li hover:text-primary"
              >
                Productos
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/papeleria-corporativa"
                className="text-footer-li hover:text-primary"
              >
                Papelería corporativa
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/flyers-y-desplegables"
                className="text-footer-li hover:text-primary"
              >
                Flyers y desplegables
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/folletos-y-revistas"
                className="text-footer-li hover:text-primary"
              >
                Folletos y revistas
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/calendarios"
                className="text-footer-li hover:text-primary"
              >
                Calendarios
              </Link>
            </p>
            <hr className="lg:hidden" />
          </div>
          <div className="p-2.5 pt-0 lg:pt-2.5 lg:w-1/5">
            <p className="pt-1 pb-1.5 lg:mt-6">
              <Link
                href="catalogo/roll-up"
                className="text-footer-li hover:text-primary"
              >
                Roll Up
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/expositores"
                className="text-footer-li hover:text-primary"
              >
                Expositores
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/cajas-y-packaging"
                className="text-footer-li hover:text-primary"
              >
                Cajas y packaging
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/regalo-promocional"
                className="text-footer-li hover:text-primary"
              >
                Regalo promocional
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="catalogo/carteles"
                className="text-footer-li hover:text-primary"
              >
                Carteles
              </Link>
            </p>
          </div>
          <div className="p-2.5 lg:w-1/5">
            <h4 className="text-base font-semibold">NOSOTROS</h4>
            <p className="pt-1 pb-1.5">
              <Link
                href="sobre-nosotros"
                className="text-footer-li hover:text-primary"
              >
                Quiénes somos
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="servicios"
                className="text-footer-li hover:text-primary"
              >
                Soluciones y servicios
              </Link>
            </p>
            <hr />
            <p className="pt-1 pb-1.5">
              <Link
                href="contacto"
                className="text-footer-li hover:text-primary"
              >
                Contacto
              </Link>
            </p>
          </div>
          <div className="p-2.5 lg:w-1/5">
            <h4 className="text-base font-semibold">INFORMACIÓN</h4>
            <p className="pt-1 pb-3">
              C/ Coto De Doñana, 9 Area Empresarial Andalucia 28320, Pinto,
              Madrid
            </p>
            <p className="text-footer-li pb-3 hover:text-primary">
              dinaprint@dinaprint.com
            </p>
            <p className="text-footer-li hover:text-primary">678 519 403</p>
            <p className="text-footer-li hover:text-primary">678 519 404</p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-[13px] p-2.5 text-center bg-white">
      <span>© Dinaprint 2023 | </span>
      <Link href="aviso-legal" className="text-footer-li hover:text-primary">
        Aviso legal
      </Link>{' '}
      |{' '}
      <Link
        href="politica-de-privacidad"
        className="text-footer-li hover:text-primary"
      >
        Política de privacidad
      </Link>{' '}
      |{' '}
      <Link
        href="politica-de-cookies"
        className="text-footer-li hover:text-primary"
      >
        Política de cookies
      </Link>
    </div>
  </footer>
);

export default Footer;
