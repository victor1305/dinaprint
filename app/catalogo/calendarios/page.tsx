import { Product } from '@/components/organisms';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calendarios - Dinaprint',
  description: 'Los calendarios son la mejor herramienta de marketing. Son muy útiles, están a la vista en cualquier mesa, estante, etc…'
};

export default async function Page() {
  const data = {
    title: 'Calendarios',
    product: 'Calendarios',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/calendar-1.jpg',
    text: [
      'La mejor herramienta de marketing. Son muy útiles, están a la vista en cualquier mesa, estante, etc…',
      'Se utilizan durante todo el año y se echan de menos cuando no llegan. Además, ofrecen infinitas posibilidades, formatos y diseños: de pared, de mesa, de bolsillo, marcapáginas; un sin fin de posibilidades.',
      'Cualquier cantidad, cualquier medida y cualquier soporte.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
