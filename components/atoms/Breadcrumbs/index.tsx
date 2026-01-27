'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

/**
 * Componente Breadcrumbs con schema BreadcrumbList.
 *
 * Si no se pasan items, genera automáticamente las migas de pan
 * basándose en la URL actual.
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generar breadcrumbs automáticamente si no se pasan items
  const breadcrumbs: BreadcrumbItem[] = items || generateBreadcrumbs(pathname);

  // Schema BreadcrumbList para SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://dinaprint.com${item.href}`
    }))
  };

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`text-sm text-gray-500 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Genera breadcrumbs automáticamente a partir de la URL
 */
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Inicio', href: '/' }];

  let currentPath = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: formatSegmentName(segment),
      href: currentPath
    });
  }

  return breadcrumbs;
}

/**
 * Formatea el nombre del segmento para mostrarlo
 */
function formatSegmentName(segment: string): string {
  const nameMap: Record<string, string> = {
    blog: 'Blog',
    catalogo: 'Catálogo',
    servicios: 'Servicios',
    contacto: 'Contacto',
    'sobre-nosotros': 'Sobre nosotros',
    'papeleria-corporativa': 'Papelería corporativa',
    'flyers-y-desplegables': 'Flyers y desplegables',
    'folletos-y-revistas': 'Folletos y revistas',
    calendarios: 'Calendarios',
    'roll-up': 'Roll up',
    expositores: 'Expositores',
    'cajas-y-packaging': 'Cajas y packaging',
    'regalo-promocional': 'Regalo promocional',
    carteles: 'Carteles',
    'imprenta-madrid': 'Imprenta Madrid',
    'imprenta-pinto': 'Imprenta Pinto',
    'imprenta-sur-de-madrid': 'Imprenta sur de Madrid'
  };

  return (
    nameMap[segment] ||
    segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}
