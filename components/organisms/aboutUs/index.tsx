import React from 'react';

import {
  AboutEnviromental,
  AboutExperience,
  AboutVersatility,
  SectionPrincipalBanner
} from '@/components/atoms';

const AboutUs: React.FC = () => (
  <div>
    <SectionPrincipalBanner
      title="Sobre nosotros"
      subtitle="Soluciones y servicios gráficos"
    />
    <div className="pt-[50px]">
      <AboutExperience />
    </div>
    <div className="pt-[50px]">
      <AboutEnviromental />
    </div>
    <div className="pt-[50px] pb-[50px]">
      <AboutVersatility />
    </div>
  </div>
);

export default AboutUs;
