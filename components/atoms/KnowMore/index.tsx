import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const KnowMore: React.FC = () => (
  <div
    className="mt-20 relative bg-transparent lg:mt-[100px]"
    style={{
      backgroundImage: 'linear-gradient(130deg, #18988b 0%, #00f2ff 89%)'
    }}
  >
    <div className="absolute bg-[url('/CTA-Shapes.png')] bg-cover bg-[left_center] bg-no-repeat w-full h-full top-0 left-0 opacity-20 lg:bg-center" />
    <div className="absolute top-[-1px] left-0 overflow-hidden w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        style={{
          width: 'calc(230% + 1.3px)',
          transform: 'translateX(-50%) rotateY(180deg)'
        }}
        className="block relative left-1/2 h-[70px] overflow-hidden lg:h-[120px]"
      >
        <path
          className="fill-white !overflow-hidden"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </div>
    <div className="md:flex md:max-w-[1200px] md:mx-auto md:items-center">
      <div className="relative px-5 pb-10 pt-[20%] text-center md:w-1/2 md:pt-20 lg:pt-32 lg:pb-28">
        <h2 className="text-2xl font-semibold text-white pb-5 lg:text-3xl lg:pb-10 lg:pt-5">
          ¿Quieres saber más sobre nuestros servicios?
        </h2>
        <Link
          href={'contacto'}
          className="text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
        >
          CONTÁCTENOS
        </Link>
      </div>
      <div className="p-5 md:w-1/2 lg:mt-[-10%] lg:absolute lg:w-[500px] min-[1100px]:w-[600px] lg:h-[418px] lg:right-[50%] lg:left-[50%] lg:bottom-[20px]">
        <Image
          src={'/impresion.jpg'}
          className="!static !rounded-r-[100px] rounded-l-[300px] !rounded-b-[100px] "
          layout="fill"
          objectFit="cover"
          fill={true}
          alt="Opcion catálogo"
        />
      </div>
    </div>
  </div>
);

export default KnowMore;
