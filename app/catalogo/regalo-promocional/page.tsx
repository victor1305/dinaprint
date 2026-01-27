import { Product } from '@/components/organisms';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Regalo promocional personalizado',
  description:
    'Regalo promocional personalizado en Madrid (Pinto): soluciones para promociones, puntos de venta y acciones comerciales desde tiradas cortas.',
  alternates: {
    canonical: '/catalogo/regalo-promocional'
  },
  keywords: [
    'regalo promocional',
    'merchandising personalizado',
    'promociones',
    'imprenta madrid',
    'imprenta pinto'
  ]
};

export default async function Page() {
  const data = {
    title: 'Regalo promocional',
    product: 'Regalo promocional',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/regalo-promocional-01.jpg',
    text: [
      'Una buena manera de acabar una reunión, crea empatía con el cliente. La mejor estrategia para inducir a la compra.',
      'Utilizable en un punto de venta, tras la visita de un cliente o en promociones de productos.',
      'Desde 5 unidades en adelante.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
