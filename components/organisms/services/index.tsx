import React from 'react';

import { servicesTypes } from '@/lib/constants';

import {
  SectionPrincipalBanner,
  Service,
  ServicesPrincipal
} from '@/components/atoms';

const Services: React.FC = () => (
  <div>
    <SectionPrincipalBanner
      title="Soluciones y servicios"
      subtitle="Soluciones y servicios gráficos"
    />
    <div className="pt-10">
      <ServicesPrincipal />
    </div>
    <div className="py-10">
      {servicesTypes.map((elm, index) => (
        <Service key={index} {...elm} />
      ))}
    </div>
  </div>
);

export default Services;
