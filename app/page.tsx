import { Main } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home - Dinaprint',
  description: 'Ponemos a tu disposición todos nuestros servicios para encontrar la mejor solución.',
};

export default async function Page() {
  return (
    <main>
      <Main />
    </main>
  );
}
