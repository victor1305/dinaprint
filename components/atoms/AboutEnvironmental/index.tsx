import React from 'react';

const AboutEnviromental: React.FC = () => (
  <div className="relative w-full md:min-h-[336px] flex justify-center items-center bg-[url('/nosotros-imagen-medioambiente.jpg')] bg-[bottom_center]">
    <div className="absolute w-full h-full opacity-50 left-0 top-0 bg-[#111111]" />
    <div className="relative w-full max-w-[825px] max-auto p-5">
      <h2 className="text-3xl text-center text-white font-semibold pt-5 pb-5">
        Compromiso medioambiental
      </h2>
      <p className="text-center text-white pb-5">
        Durante muchos años el impacto medioambiental que ha provocado el sector
        de la industria gráfica ha sido muy alarmante, esto nos impulsa a ser
        ecológicamente responsables y a utilizar siempre papeles certificados
        PEFC FSC ó 100% reciclados, pudiendo facilitar la cadena de custodia, si
        así lo requiere el cliente.
      </p>
      <p className="text-center text-white pb-5">
        Utilizamos planchas que no llevan proceso químico, ni contaminantes,
        tampoco se utilizan alcoholes en las baterías de las máquinas y nuestras
        tintas son siempre con base vegetal.
      </p>
    </div>
  </div>
);

export default AboutEnviromental;
