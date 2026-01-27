import { Services } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Servicios de imprenta: impresión digital, offset y acabados',
  description:
    'Servicios de imprenta en Madrid (Pinto, sur de Madrid): preimpresión, impresión offset y digital, acabados y manipulados, distribución y envíos.',
  alternates: {
    canonical: '/servicios'
  },
  keywords: [
    'servicios imprenta',
    'impresión digital madrid',
    'impresión offset madrid',
    'preimpresión',
    'acabados impresión',
    'troquelado',
    'plastificado'
  ]
};

export default async function Page() {
  return (
    <main>
      <Services />
    </main>
  );
}

