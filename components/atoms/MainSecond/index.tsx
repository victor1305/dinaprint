import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainSecond: React.FC = () => (
  <div>
    <div className="relative lg:hidden">
      <div className="mx-auto w-[280px] h-[274px] min-[360px]:w-[324px] lg:mx-0 min-[360px]:h-[317px] min-[550px]:w-[400px] min-[550px]:h-[380px] lg:w-[643px] lg:h-[629px]">
        <Image
          src={'/primer-bloque.jpg'}
          className="!static"
          layout="fill"
          objectFit="cover"
          alt="about us image"
        />
      </div>
      <div className="absolute border-4 z-[-2] border-r-0 border-primary bg-trasnparent h-[290px] -top-6 right-0 w-[290px] min-[550px]:w-[350px] min-[550px]:h-[340px] sm:border-r-4 sm:right-1/2 sm:left-1/2 lg:w-[500px]" />
      <div className="pt-14 px-10 mx-auto max-w-[720px] pb-24">
        <h2 className="text-3xl font-semibold text-secondary pb-8">NOSOTROS</h2>
        <p className="pb-4 text-base">
          En <strong>Dinaprint</strong> llevamos más de 25 años dedicándonos a
          la comunicación gráfica, esto nos ha permitido poder estar a la
          vanguardia tanto en conocimientos como en técnicas de última
          generación, en un sector que ha experimentado numerosos cambios en los
          últimos tiempos.
        </p>
        <p className="pb-8 text-base">
          Gracias a las nuevas tecnologías, podemos ofrecer a nuestros clientes
          la oportunidad de materializar cualquier proyecto de impresión que
          requiera su negocio, ya sea grande o pequeño.
        </p>
        <Link
          href={'sobre-nosotros'}
          className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
        >
          VER MÁS
        </Link>
      </div>
    </div>
    <div className="relative hidden lg:block max-w-[1120px] mx-5 min-[1120px]:mx-auto">
      <div className="mx-0 w-[643px] h-[629px]">
        <Image
          src={'/primer-bloque.jpg'}
          className="!static"
          layout="fill"
          objectFit="cover"
          alt="about us image"
        />
      </div>
      <div className="pl-[180px] pr-7 pt-7 absolute border-4 z-[-2] border-r-0 border-primary bg-trasnparent -top-6 right-0 sm:border-r-4 sm:right-1/2 sm:left-1/2 w-[500px] h-[600px]">
        <h2 className="text-3xl font-semibold text-secondary pb-8">NOSOTROS</h2>
        <p className="pb-4 text-base">
          En <strong>Dinaprint</strong> llevamos más de 25 años dedicándonos a
          la comunicación gráfica, esto nos ha permitido poder estar a la
          vanguardia tanto en conocimientos como en técnicas de última
          generación, en un sector que ha experimentado numerosos cambios en los
          últimos tiempos.
        </p>
        <p className="pb-8 text-base">
          Gracias a las nuevas tecnologías, podemos ofrecer a nuestros clientes
          la oportunidad de materializar cualquier proyecto de impresión que
          requiera su negocio, ya sea grande o pequeño.
        </p>
        <Link
          href={'sobre-nosotros'}
          className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
        >
          VER MÁS
        </Link>
      </div>
    </div>
  </div>
);

export default MainSecond;
