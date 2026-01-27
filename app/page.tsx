import { Main } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Imprenta en Madrid (Pinto) | Impresión digital y offset',
  description:
    'Imprenta en Madrid (Pinto, sur de Madrid). Impresión digital y offset, papelería corporativa, folletos, carteles, packaging y regalo promocional.',
  alternates: {
    canonical: '/'
  },
  keywords: [
    'imprenta madrid',
    'imprenta pinto',
    'imprenta sur de madrid',
    'impresión digital madrid',
    'impresión offset madrid',
    'papelería corporativa',
    'folletos',
    'carteles',
    'packaging',
    'regalo promocional'
  ]
};

export default async function Page() {
  return (
    <main>
      <Main />
    </main>
  );
}
