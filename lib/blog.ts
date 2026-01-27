/**
 * Sistema de blog simple basado en datos.
 *
 * Para añadir un nuevo artículo:
 * 1. Añade un nuevo objeto al array BLOG_POSTS
 * 2. El slug debe ser único y URL-friendly (sin espacios, minúsculas, guiones)
 * 3. El contenido se escribe en el array 'content' con párrafos separados
 * 4. Opcionalmente añade 'list' para listas con viñetas
 *
 * El artículo aparecerá automáticamente en el listado y generará su página.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string; // Formato: YYYY-MM-DD
  updatedAt?: string;
  category: string;
  tags: string[];
  readingTime: number; // minutos
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'quote';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  level?: 2 | 3; // Para headings: h2 o h3
}

export const BLOG_CATEGORIES = [
  'Guías',
  'Consejos',
  'Tendencias',
  'Casos de éxito'
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'impresion-offset-vs-digital-diferencias',
    title: 'Impresión offset vs digital: ¿cuál elegir para tu proyecto?',
    description:
      'Descubre las diferencias entre impresión offset y digital, cuándo usar cada una y cómo elegir la mejor opción según cantidad, calidad y presupuesto.',
    image: '/impresion.jpg',
    author: 'Dinaprint',
    publishedAt: '2026-01-15',
    category: 'Guías',
    tags: ['impresión offset', 'impresión digital', 'imprenta'],
    readingTime: 6,
    content: [
      {
        type: 'paragraph',
        text: 'Elegir entre impresión offset y digital es una de las decisiones más importantes al encargar un trabajo de imprenta. Ambas técnicas tienen ventajas específicas y la mejor elección depende de tu proyecto concreto.'
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Qué es la impresión offset?'
      },
      {
        type: 'paragraph',
        text: 'La impresión offset es un método tradicional que utiliza planchas de aluminio para transferir la tinta al papel. Es ideal para tiradas largas (más de 500-1000 unidades) porque el coste unitario baja significativamente con la cantidad.'
      },
      {
        type: 'list',
        items: [
          'Calidad excepcional y colores consistentes en toda la tirada.',
          'Coste unitario muy bajo en grandes cantidades.',
          'Admite una gran variedad de papeles y gramajes.',
          'Ideal para folletos, revistas, catálogos y libros.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Qué es la impresión digital?'
      },
      {
        type: 'paragraph',
        text: 'La impresión digital funciona sin planchas, enviando directamente el archivo a la máquina. Es perfecta para tiradas cortas y trabajos urgentes porque no requiere preparación previa.'
      },
      {
        type: 'list',
        items: [
          'Sin costes de preparación ni planchas.',
          'Ideal para tiradas cortas (desde 1 unidad).',
          'Permite personalización y datos variables.',
          'Entrega rápida, incluso en el mismo día.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Cuándo elegir cada una?'
      },
      {
        type: 'paragraph',
        text: 'Como regla general: elige digital para menos de 500 unidades o cuando necesites rapidez; elige offset para más de 1000 unidades o cuando la calidad de color sea crítica. Entre 500-1000 unidades, depende del proyecto específico.'
      },
      {
        type: 'quote',
        text: 'En Dinaprint te asesoramos sobre la mejor opción para tu proyecto. Contacta con nosotros y te preparamos un presupuesto comparativo.'
      }
    ]
  },
  {
    slug: 'como-preparar-archivos-para-imprenta',
    title: 'Cómo preparar archivos para imprenta: guía completa',
    description:
      'Aprende a preparar correctamente tus archivos para imprenta: formato PDF, resolución, sangrados, marcas de corte y perfiles de color CMYK.',
    image: '/papeleria-corporativa-01.jpg',
    author: 'Dinaprint',
    publishedAt: '2026-01-20',
    category: 'Guías',
    tags: ['preparar archivos', 'PDF imprenta', 'CMYK', 'sangrado'],
    readingTime: 8,
    content: [
      {
        type: 'paragraph',
        text: 'Preparar correctamente los archivos es fundamental para obtener un resultado profesional. Un archivo mal preparado puede causar problemas de color, cortes incorrectos o retrasos en la producción.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Formato: siempre PDF/X'
      },
      {
        type: 'paragraph',
        text: 'El formato estándar para imprenta es PDF/X-1a o PDF/X-4. Estos formatos garantizan que las fuentes están incrustadas, los colores son correctos y no hay transparencias problemáticas.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Resolución: mínimo 300 ppp'
      },
      {
        type: 'paragraph',
        text: 'Las imágenes deben tener al menos 300 píxeles por pulgada (ppp o dpi) a tamaño final. Una imagen de baja resolución se verá pixelada al imprimir. Comprueba siempre la resolución antes de enviar.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Sangrado: 3 mm mínimo'
      },
      {
        type: 'paragraph',
        text: 'El sangrado (o bleed) es el margen extra que se extiende más allá del borde de corte. Si tu diseño tiene color o imágenes hasta el borde, necesitas 3 mm de sangrado para evitar filos blancos.'
      },
      {
        type: 'list',
        items: [
          'Extiende fondos e imágenes 3 mm más allá del corte.',
          'Mantén textos y elementos importantes a 5 mm del borde.',
          'Incluye marcas de corte en el PDF.',
          'No uses líneas de corte dentro del diseño.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Color: CMYK, no RGB'
      },
      {
        type: 'paragraph',
        text: 'La impresión usa tintas CMYK (cian, magenta, amarillo, negro). Si tu archivo está en RGB (modo pantalla), los colores cambiarán al imprimir. Convierte siempre a CMYK antes de exportar.'
      },
      {
        type: 'quote',
        text: '¿Tienes dudas sobre tu archivo? Envíanoslo y lo revisamos gratis antes de imprimir.'
      }
    ]
  },
  {
    slug: 'tipos-de-papel-para-impresion',
    title: 'Tipos de papel para impresión: guía para elegir el adecuado',
    description:
      'Conoce los diferentes tipos de papel para impresión: estucado, offset, reciclado, kraft y especiales. Descubre cuál es mejor para tu proyecto.',
    image: '/folletos.jpg',
    author: 'Dinaprint',
    publishedAt: '2026-01-22',
    category: 'Guías',
    tags: ['tipos de papel', 'papel estucado', 'gramaje', 'papel reciclado'],
    readingTime: 7,
    content: [
      {
        type: 'paragraph',
        text: 'El papel es mucho más que un soporte: transmite calidad, valores de marca y afecta directamente a cómo se percibe tu impreso. Elegir el papel adecuado marca la diferencia.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Papel estucado (couché)'
      },
      {
        type: 'paragraph',
        text: 'El papel estucado tiene un recubrimiento que le da un acabado liso y uniforme. Ofrece excelente reproducción de color y es el más usado para folletos, catálogos y revistas.'
      },
      {
        type: 'list',
        items: [
          'Estucado brillo: acabado brillante, colores vivos.',
          'Estucado mate: acabado suave, elegante, sin reflejos.',
          'Gramajes habituales: 90g, 115g, 135g, 170g, 250g, 300g.',
          'Ideal para fotografías y diseños con mucho color.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Papel offset (no estucado)'
      },
      {
        type: 'paragraph',
        text: 'El papel offset no tiene recubrimiento, lo que le da un tacto más natural y poroso. Es ideal para escritura, libros de texto y documentos que se van a manipular mucho.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Papeles especiales'
      },
      {
        type: 'list',
        items: [
          'Kraft: aspecto natural y ecológico, color marrón característico.',
          'Reciclado: con certificación ambiental, ideal para marcas sostenibles.',
          'Texturado: con relieve o texturas especiales para acabados premium.',
          'Metalizado: efecto brillante para packaging de lujo.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Qué gramaje elegir?'
      },
      {
        type: 'paragraph',
        text: 'El gramaje indica el peso del papel en gramos por metro cuadrado. Mayor gramaje significa papel más grueso y resistente. Para flyers usa 135-170g, para tarjetas 300-350g, para folletos interiores 115-135g.'
      },
      {
        type: 'quote',
        text: 'Solicita muestras de papel gratis. Te enviamos un kit con diferentes opciones para que elijas la mejor para tu proyecto.'
      }
    ]
  },
  {
    slug: 'acabados-de-impresion-guia-completa',
    title: 'Acabados de impresión: plastificado, UVI, stamping y más',
    description:
      'Descubre los acabados de impresión que harán destacar tus impresos: plastificado mate y brillo, barniz UVI, stamping, troquelado y relieve.',
    image: '/packing-01.jpg',
    author: 'Dinaprint',
    publishedAt: '2026-01-25',
    category: 'Guías',
    tags: ['acabados', 'plastificado', 'UVI', 'stamping', 'troquelado'],
    readingTime: 6,
    content: [
      {
        type: 'paragraph',
        text: 'Los acabados transforman un impreso correcto en uno memorable. Aportan protección, tacto premium y efectos visuales que captan la atención.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Plastificado'
      },
      {
        type: 'paragraph',
        text: 'El plastificado aplica una fina capa de plástico sobre el papel. Protege de la humedad, el desgaste y aporta un acabado profesional. Disponible en mate (elegante, sin reflejos) y brillo (colores vivos, llamativo).'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Barniz UVI (ultravioleta)'
      },
      {
        type: 'paragraph',
        text: 'El barniz UVI se aplica en zonas concretas para crear contraste. Por ejemplo, un logo brillante sobre un fondo mate. Es un efecto muy utilizado en tarjetas de visita y packaging.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Stamping (estampación en caliente)'
      },
      {
        type: 'paragraph',
        text: 'El stamping aplica una lámina metálica (oro, plata, colores) mediante calor y presión. Crea un efecto lujoso ideal para logotipos, títulos o detalles en packaging premium.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Troquelado'
      },
      {
        type: 'paragraph',
        text: 'El troquelado corta el papel en formas especiales: ventanas, solapas, contornos personalizados. Permite crear diseños únicos que destacan frente a formatos rectangulares estándar.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Relieve y gofrado'
      },
      {
        type: 'paragraph',
        text: 'El relieve crea zonas elevadas en el papel que se aprecian al tacto. El gofrado crea texturas o patrones en toda la superficie. Ambos aportan un efecto táctil muy premium.'
      },
      {
        type: 'quote',
        text: 'En Dinaprint podemos combinar varios acabados en un mismo trabajo. Consúltanos para crear un impreso único que represente tu marca.'
      }
    ]
  },
  {
    slug: 'ideas-packaging-destacar-producto',
    title: 'Ideas de packaging para hacer destacar tu producto',
    description:
      'Consejos y tendencias de packaging para que tu producto destaque en el punto de venta: materiales, acabados, sostenibilidad y personalización.',
    image: '/packing-01.jpg',
    author: 'Dinaprint',
    publishedAt: '2026-01-27',
    category: 'Consejos',
    tags: ['packaging', 'diseño cajas', 'sostenibilidad', 'branding'],
    readingTime: 5,
    content: [
      {
        type: 'paragraph',
        text: 'El packaging es el primer contacto físico del cliente con tu producto. Un buen diseño de caja o envoltorio puede ser decisivo para la compra y para la percepción de marca.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tendencia 1: Sostenibilidad'
      },
      {
        type: 'paragraph',
        text: 'Los consumidores valoran cada vez más el packaging ecológico. Usa cartón reciclado, tintas vegetales y evita plásticos innecesarios. Comunícalo en el packaging para reforzar tus valores de marca.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tendencia 2: Minimalismo'
      },
      {
        type: 'paragraph',
        text: 'Menos es más. Un diseño limpio con espacio en blanco transmite calidad y sofisticación. Destaca tu logo y mensaje principal sin saturar de información.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tendencia 3: Experiencia de unboxing'
      },
      {
        type: 'paragraph',
        text: 'El momento de abrir el paquete es una oportunidad para sorprender. Interior impreso, papel de seda, tarjetas de agradecimiento... cada detalle suma para crear una experiencia memorable.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tendencia 4: Personalización'
      },
      {
        type: 'paragraph',
        text: 'Con impresión digital puedes personalizar cada caja con el nombre del cliente, ediciones limitadas o diseños únicos para fechas especiales. Crea sensación de exclusividad.'
      },
      {
        type: 'quote',
        text: 'Fabricamos packaging desde pequeñas tiradas. Cuéntanos tu idea y te ayudamos a hacerla realidad.'
      }
    ]
  }
];

/**
 * Obtiene todos los posts ordenados por fecha (más recientes primero)
 */
export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Obtiene un post por su slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/**
 * Obtiene posts por categoría
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * Obtiene posts relacionados (misma categoría, excluyendo el actual)
 */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === current.category)
    .slice(0, limit);
}

/**
 * Genera el schema Article para un post
 */
export function getArticleSchema(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dinaprint',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dinaprint.com/logo-dinaprint-final-02.png'
      }
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}
