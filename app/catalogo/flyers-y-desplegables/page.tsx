import { Product } from '@/components/organisms';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Impresión de flyers y desplegables',
  description:
    'Impresión de flyers y desplegables en Madrid (Pinto): distintos tamaños, papeles y acabados para buzoneo, promociones y puntos de venta.',
  alternates: {
    canonical: '/catalogo/flyers-y-desplegables'
  },
  keywords: [
    'imprimir flyers madrid',
    'desplegables imprenta',
    'buzoneo',
    'imprenta pinto',
    'impresión digital madrid'
  ]
};

export default async function Page() {
  const data = {
    title: 'Flyers y desplegables',
    product: 'Flyers y desplegables',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/papeleria-corporativa-01.jpg',
    text: [
      'Utilizados especialmente para comunicar las principales características de algún producto o servicio. Dependiendo de lo que queramos transmitir, puede variar su tamaño, su diseño, el número de caras y el papel utilizado, así como diferentes acabados.',
      'La impresión y el diseño de los Flyers y Desplegables no resulta tan cara como otras estrategias comerciales y tiene la ventaja de llegar a todo el mundo a través de: '
    ],
    list: [
      'Publicidad a domicilio mediante buzoneo responsable.',
      'Entrega en mano a la puerta de locales.',
      'Promociones en puntos de venta.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
