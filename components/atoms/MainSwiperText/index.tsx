import Link from 'next/link';
import React from 'react';

const MainSwiperText: React.FC = () => (
  <div className="bg-footer-bg h-[464px]">
    <div className="max-w-[520px] mx-auto p-10 md:max-w-full md:px-10 lg:px-20 lg:pt-20">
      <h2 className="text-3xl font-semibold text-secondary pb-8">
        ELÍGENOS
      </h2>
      <p className="pb-4">
        Diseñamos, imprimimos, encuadernamos, plastificamos, troquelamos,
        manipulamos y distribuimos.
      </p>
      <p className="pb-4">Cualquier cantidad, cualquier formato.</p>
      <p className="pb-10">
        Para nosotros cada cliente es una oportunidad de negocio y por esa razón
        se merece el mejor trato.
      </p>
      <Link
        href={'catalogo'}
        className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
      >
        VER MÁS
      </Link>
    </div>
  </div>
);

export default MainSwiperText;
