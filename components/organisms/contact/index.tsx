'use client';

import React from 'react';

import {
  ContactMain,
  KnowMore,
  SectionPrincipalBanner
} from '@/components/atoms';
import { ContactForm, FindUs } from '@/components/molecules';

const Contact: React.FC = () => (
  <div>
    <SectionPrincipalBanner
      title="Contacto"
      subtitle="Soluciones y servicios gráficos"
    />
    <div className="p-5 pt-10 lg:flex lg:flex-row-reverse lg:items-center mx-auto w-full max-w-[1200px]">
      <div className='lg:w-[1/2] lg:pl-10'>
        <ContactMain />
      </div>
      <div className='lg:w-[1/2]'>
        <ContactForm />
      </div>
    </div>
    <div className="pt-10 px-10">
      <FindUs />
    </div>
    <KnowMore path={'/servicios'} copy={'VER MÁS'} />
  </div>
);

export default Contact;
