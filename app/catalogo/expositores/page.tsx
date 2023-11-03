import { Product } from '@/components/organisms';

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
