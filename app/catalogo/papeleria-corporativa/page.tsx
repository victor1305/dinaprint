import { Product } from '@/components/organisms';

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Papelería corporativa - Dinaprint',
  description: 'La comunicación impresa de cualquier negocio o empresa, transmite su identidad y provoca sensaciones y opiniones.',
};

export default async function Page() {
  const data = {
    title: 'Papelería corporativa',
    product: 'Papelería corporativa',
    subtitle: 'Soluciones y servicios gráficos',
    image: '/papeleria-corporativa-01.jpg',
    text: [
      'La comunicación impresa de cualquier negocio o empresa, transmite su identidad y provoca sensaciones y opiniones. Para ello se utilizan tanto tarjetas, como carpetas, cartas, catálogos, folletos…',
      'Todos los elementos deben transmitir uniformidad y el mismo estilo gráfico, creando una sensación de seguridad y profesionalidad.',
      'La <b>herramienta más utilizada es la tarjeta</b>, fundamental en la creación de relaciones nuevas. Normalmente se entrega a un contacto que puede representar a un cliente potencial.',
      'Actualmente, hay miles de estilos y soportes que aportan originalidad y buen gusto a la hora de diseñar una tarjeta.'
    ]
  };
  return (
    <main>
      <Product {...data} />
    </main>
  );
}
