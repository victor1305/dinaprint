import Image from 'next/image';
import React from 'react';

const AboutVersatility: React.FC = () => (
  <div className="max-w-[1200px] md:flex justify-center mx-auto">
    <div className="hidden md:block md:w-1/2">
      <Image
        src={'/workplace-dinaprint.jpg'}
        className="!static max-h-[414px]"
        layout="fill"
        objectFit="cover"
        alt="team"
      />
    </div>
    <div className="p-10 pt-0 md:pt-10 md:w-1/2">
      <h2 className="text-secondary text-3xl font-semibold pb-5">
        Versatilidad
      </h2>
      <p>
        Podemos gestionar un proyecto de principio a fin, desde la solicitud del
        presupuesto, hasta el envío hacia el cliente final. Lo llevamos a cabo
        sin la intervención de terceros, en cualquier formato y acabado.
      </p>
    </div>
  </div>
);

export default AboutVersatility;
