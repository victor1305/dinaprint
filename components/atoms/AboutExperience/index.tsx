import React from 'react';

const AboutExperience: React.FC = () => (
  <div className="flex flex-col md:flex-row w-full mx-auto max-w-[1200px]">
    <div className="h-[320px] md:h-[500px] w-full bg-[url('/imprenta-dinaprint-03.jpg')] bg-cover bg-center md:w-1/2" />
    <div className="p-5 md:w-1/2">
      <h2 className="text-3xl font-semibold text-secondary pb-5 pt-5 md:pt-0">
        Experiencia Dinaprint
      </h2>
      <p>
        Nuestro sentido del compromiso y la ilusión que mantenemos desde hace
        más de 25 años, nos han permitido rodearnos de un equipo profesional y
        humano capaz de desarrollar cualquier proyecto que nos presentes.
      </p>
    </div>
  </div>
);

export default AboutExperience;
