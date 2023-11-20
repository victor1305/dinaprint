import { AboutUs } from '@/components/organisms';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Sobre nosotros - Dinaprint',
  description: 'Nuestro sentido del compromiso y la ilusión que mantenemos desde hace más de 25 años',
};

export default async function Page() {
  return (
    <main>
      <AboutUs />
    </main>
  );
}
