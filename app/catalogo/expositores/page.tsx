import { Product } from '@/components/organisms';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expositores para punto de venta',
  description:
    'Expositores para punto de venta en Madrid (Pinto): soluciones para retail con medidas y acabados personalizados.',
  alternates: {
    canonical: '/catalogo/expositores'
  },
  keywords: [
    'expositores punto de venta',
    'expositores madrid',
    'PLV',
    'imprenta pinto',
    'acabados personalizados'
  ]
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
