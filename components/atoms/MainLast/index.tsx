import React from 'react';

const MainLast: React.FC = () => (
  <div className="w-full h-[278px] bg-[url('/banner.jpg')] bg-center">
    <h2 className="pt-5 text-[21px] min-[374px]:text-2xl min-[410px]:pt-10 min-[500px]-text-3xl text-secondary font-semibold text-center">
      SIEMPRE EL MEJOR PRECIO
    </h2>
    <p className="text-sm min-[374px]:text-base text-white text-center font-medium p-5 max-w-[700px] mx-auto">
      No variamos el precio en función del tiempo, nuestros precios son siempre
      igual de interesantes. Cada presupuesto se plantea de forma independiente
      por un asesor técnico.
    </p>
    <div className="text-center">
      <button className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl">
        PEDIR PRESUPUESTO
      </button>
    </div>
  </div>
);

export default MainLast;
