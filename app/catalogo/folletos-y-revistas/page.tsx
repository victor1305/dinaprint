import { Product } from '@/components/organisms';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Folletos y revistas - Dinaprint',
  description: 'Folletos y revistas impresos a todo color en varios tipos de encuadernaciones, hilo, wire-o, cola pur…',
};

export default async function Page() {
  const data = {
    title: 'Folletos y revistas',
    product: 'Folletos y revistas',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/Folletos-y-revistas-001.jpg',
    text: [
      'Impresos a todo color en varios tipos de encuadernaciones, hilo, wire-o, cola pur… Ofrecemos una amplia variedad de papeles en diferentes gramajes y acabados como plastificados de todo tipo y troquelados.'
    ],
    list: [
      'Impresión digital o en Offset según tirada. ',
      'Revistas promocionales de comercios en ayuntamientos.',
      'Folletos informativos.',
      'Revistas corporativas.',
      'Folletos para ferias y exposiciones'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
