import { Product } from '@/components/organisms';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expositores - Dinaprint',
  description: 'Los expositores sirven para el aprovechamiento al máximo del punto de venta, el producto sale al encuentro del cliente'
};

export default async function Page() {
  const data = {
    title: 'Expositores',
    product: 'Expositores',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/stand-001.jpg',
    text: [
      'Aprovechamiento al máximo del punto de venta, el producto sale al encuentro del cliente.',
      'Se utilizan en los centros comerciales y se convierten en un punto de venta cercano.',
      'Admiten acabados y medidas de todo tipo.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
