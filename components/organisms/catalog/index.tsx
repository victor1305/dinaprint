import React from 'react';

import { catalogOptions } from '@/lib/constants';

import { CatalogOption, KnowMore, SectionPrincipalBanner } from '@/components/atoms';

const Catalog: React.FC = () => (
  <div>
    <SectionPrincipalBanner
      title="Catálogo"
      subtitle="Soluciones y servicios gráficos"
    />
    <div className="pt-10 w-full max-w-[1200px] mx-auto grid grid-cols min-[480px]:grid-cols-2 min-[800px]:grid-cols-3">
      {catalogOptions.map((elm, index) => (
        <div key={index} className='w-full'>
          <CatalogOption  {...elm} />
        </div>
      ))}
    </div>
    <KnowMore />
  </div>
);

export default Catalog;
