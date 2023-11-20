import { Product } from '@/components/organisms';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carteles - Dinaprint',
  description: 'Los carteles difunden una información, un evento, o la promoción de un producto.'
};

export default async function Page() {
  const data = {
    title: 'Carteles',
    product: 'Carteles',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/carteles-01.jpg',
    text: [
      'Difunden una información, un evento, o la promoción de un producto. Su éxito depende en parte del diseño y de la calidad de impresión, lo podemos enriquecer con los acabados que requiera el diseño, como troquelados, barnices, UVI, etc… Pueden realizarse en diferentes soportes, desde papel fotográfico a rígidos, en cualquier medida y cantidad.',
      'Si prefieres lonas, también podemos hacerlas, pídenos presupuesto y asesoramiento.',
      'Contamos con un servicio de instalación.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
