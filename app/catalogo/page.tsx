import { Catalog } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Catálogo - Dinaprint',
  description: 'Todas nuestras soluciones y servicios gráficos',
};

export default async function Page() {
  return (
    <main>
      <Catalog />
    </main>
  );
}