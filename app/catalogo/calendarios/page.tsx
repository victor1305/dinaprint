import { FAQ } from '@/components/atoms';
import { Product } from '@/components/organisms';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impresión de calendarios personalizados',
  description:
    'Impresión de calendarios personalizados en Madrid (Pinto): de pared, mesa o bolsillo, en cualquier cantidad, medida y soporte.',
  alternates: {
    canonical: '/catalogo/calendarios'
  },
  keywords: [
    'imprimir calendarios madrid',
    'calendarios personalizados',
    'imprenta pinto',
    'impresión digital',
    'impresión offset'
  ]
};

const faqItems = [
  {
    question: '¿Qué tipos de calendarios podéis imprimir?',
    answer:
      'Imprimimos calendarios de pared (con espiral o grapados), de sobremesa, de bolsillo, marcapáginas y formatos especiales. Cualquier diseño es posible.'
  },
  {
    question: '¿Cuándo debo encargar mis calendarios?',
    answer:
      'Recomendamos encargar en octubre-noviembre para tenerlos listos antes de fin de año. Para campañas de empresa, algunos clientes encargan en septiembre.'
  },
  {
    question: '¿Puedo personalizar cada calendario con datos diferentes?',
    answer:
      'Sí, con impresión digital de datos variables podemos personalizar cada unidad con nombre, logo o contenido distinto.'
  },
  {
    question: '¿Qué cantidad mínima puedo pedir?',
    answer:
      'No hay cantidad mínima. Puedes encargar desde 1 unidad, aunque a partir de 50-100 unidades el precio por unidad baja notablemente.'
  }
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Calendarios personalizados',
  description:
    'Calendarios personalizados de pared, sobremesa y bolsillo. Impresión en cualquier cantidad.',
  brand: {
    '@type': 'Brand',
    name: 'Dinaprint'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Dinaprint'
    }
  }
};

export default async function Page() {
  const data = {
    title: 'Calendarios',
    product: 'Calendarios',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/calendar-1.jpg',
    text: [
      'El calendario es una de las mejores herramientas de marketing. Siempre está a la vista en cualquier mesa, estante u oficina, recordando tu marca durante todo el año.',
      'Ofrecemos infinitas posibilidades, formatos y diseños: de pared con espiral, de sobremesa, de bolsillo, marcapáginas, magnéticos y más. Cualquier cantidad, medida y soporte.',
      'Personalizamos cada calendario con imágenes, textos y datos de tu empresa. Un regalo corporativo que tus clientes utilizarán a diario.'
    ]
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Product {...data} />
      <section className="px-5 pb-10 mx-auto max-w-[1200px]">
        <FAQ items={faqItems} />
      </section>
    </main>
  );
}
