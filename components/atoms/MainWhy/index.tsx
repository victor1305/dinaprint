import Image from 'next/image';
import React from 'react';

import { mainAnswers } from '@/lib/constants';

const MainWhy: React.FC = () => (
  <div>
    <h2 className="text-3xl text-secondary font-semibold pl-5 pb-5 text-center">
      ¿POR QUÉ DINAPRINT?
    </h2>
    <div className="md:flex md:justify-center md:max-w-[1200px] mx-auto">
      <div className="h-[50px] w-full bg-gray-space md:h-[200px] md:w-[70px]" />
      <div className="hidden bg-green-low bg-orange-low bg-yellow-main" />
      {mainAnswers.map((elm, index) => (
        <div
          key={index}
          className={`h-[200px] flex justify-center w-full ${elm.bg} md:items-center`}
        >
          <div className="flex flex-col justify-center items-center md:h-[160px] md:justify-between">
            <Image src={elm.icon} alt={'icono'} width={100} height={100} />
            <h4 className="pt-5 text-lg text-white font-semibold md:pt-0">
              {elm.name.toUpperCase()}
            </h4>
          </div>
        </div>
      ))}
      <div className="h-[50px] w-full bg-gray-space md:h-[200px] md:w-[70px]" />
    </div>
  </div>
);

export default MainWhy;
