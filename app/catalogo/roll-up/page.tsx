import { Product } from '@/components/organisms';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Roll up: impresión y montaje para ferias y eventos',
  description:
    'Roll up en Madrid (Pinto): impresión a todo color, varios tamaños y acabados. Ideal para ferias, exposiciones y eventos.',
  alternates: {
    canonical: '/catalogo/roll-up'
  },
  keywords: [
    'roll up madrid',
    'imprimir roll up',
    'roll up ferias',
    'imprenta pinto',
    'impresión gran formato'
  ]
};

export default async function Page() {
  const data = {
    title: 'Roll up',
    product: 'Roll up',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/rollup-001.jpg',
    text: [
      'Varios tamaños y acabados, según la necesidad del cliente: impresos a todo color, con mecanismo en aluminio y acabado elegante. Montaje sencillo y fácil de transportar.',
      'Son útiles en ferias y exposiciones, para promocionar productos puntuales y en eventos de cualquier tipo.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
