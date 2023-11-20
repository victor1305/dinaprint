import { Services } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Soluciones y servicios - Dinaprint',
  description: 'Aportamos soluciones y servicios para todas las necesidades en comunicación gráfica.',
};

export default async function Page() {
  return (
    <main>
      <Services />
    </main>
  );
}

