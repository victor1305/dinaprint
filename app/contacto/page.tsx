import { Contact } from "@/components/organisms";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Contacto - Dinaprint',
  description: 'Si necesitas más información sobre nuestra empresa o sobre nuestros servicios',
};

export default async function Page() {
  return (
    <main>
      <Contact />
    </main>
  );
}
