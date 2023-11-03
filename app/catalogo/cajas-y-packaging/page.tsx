import { Product } from '@/components/organisms';

export default async function Page() {
  const data = {
    title: 'Cajas y packaging',
    product: 'Cajas y packaging',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/packing-01.jpg',
    text: [
      'Un buen Packaging debe identificar al producto de una manera positiva e inducir a la compra, transmitiendo confianza y calidad. El producto tiene que estar protegido y ser fácil de utilizar y apilar en el punto de venta. Una buena presentación e impresión convence y fideliza al cliente.',
      'Con las nuevas técnicas de impresión digital podemos hacer cantidades mínimas con todo tipo de acabados.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
