import { Catalog } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Catálogo de productos de imprenta',
  description:
    'Catálogo de productos de imprenta: papelería corporativa, folletos y revistas, carteles, packaging, expositores, roll up, calendarios y regalo promocional.',
  alternates: {
    canonical: '/catalogo'
  },
  keywords: [
    'catálogo imprenta',
    'productos de imprenta',
    'imprenta madrid',
    'impresión digital',
    'impresión offset'
  ]
};

export default async function Page() {
  return (
    <main>
      <Catalog />
    </main>
  );
}