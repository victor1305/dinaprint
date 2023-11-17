import Link from 'next/link';
import React from 'react';

const MainPrincipal: React.FC = () => (
  <div className="px-7 bg-[url('/slider-principal-dinaprint.jpg')] w-full h-[400px] lg:h-[600px] flex flex-col items-center justify-center">
    <h1 className="text-[33px] text-white pb-5 font-bold drop-shadow-title-home">
      ¡DÉJANOS IMPRESIONARTE!
    </h1>
    <h4 className="text-xl text-white font-bold white drop-shadow-title-home mb-5 lg:mb-10">
      Ponemos a tu disposición todos nuestros servicios para encontrar la mejor
      solución.
    </h4>
    <Link
      href={'/servicios'}
      className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
    >
      VER MÁS
    </Link>
  </div>
);

export default MainPrincipal;
