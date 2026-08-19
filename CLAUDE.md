# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este proyecto

Sitio web corporativo de **Dinaprint**, imprenta en Pinto (sur de Madrid). Next.js 14 (App Router),
TypeScript, Tailwind. Es un sitio estático de marketing orientado a SEO local: no hay base de datos,
ni API, ni autenticación. El formulario de contacto se envía por EmailJS desde el cliente.

El contenido está en castellano y los comentarios del código también.

## Comandos

```bash
npm run dev              # servidor de desarrollo (Node 22, ver .nvmrc)
npm run build            # check-images + generate-og + next build
npm run lint             # biome check .   (NO eslint, pese a que existe .eslintrc.json)
npm run format           # biome format --write .
npm run check:images     # valida rutas de imagen sin construir
npm run generate:og      # regenera los recortes 1200x630 en /public/og
npm run generate:icons   # fuera del build; solo si cambia la imagen de marca
```

No hay tests configurados. El linter/formateador es **Biome** (`biome.json`), no ESLint ni Prettier.

## Arquitectura

### Capa SEO: `lib/seo.ts` es la fuente única

Todo lo que sea dominio, imágenes sociales o JSON-LD sale de [lib/seo.ts](lib/seo.ts). Al crear o
tocar una página:

- **`openGraph` no hace merge profundo.** Next sustituye entero el bloque del layout cuando la página
  declara el suyo. Hay que esparcir `...OG_DEFAULTS` siempre, o la página sale sin `og:site_name` ni
  `og:locale`.
- Las imágenes sociales se declaran con `ogImage(path, alt)` / `ogImageUrl(path)`, que apuntan a
  `/og/<archivo>.jpg` — recortes generados por el build, no a la imagen original.
- Los schemas se construyen con `buildServiceSchema`, `buildProductSchema`, `getLocalBusinessSchema`,
  `getOrganizationSchema`, `getWebSiteSchema` y se pintan con `<JsonLd data={...} />`.
- El `localBusiness` schema se emite **por página**, no en el layout, para que los rastreadores no
  concatenen JSON-LD duplicado.

### Horario comercial: `lib/hours.ts`

Fuente única del horario (schema, pie, contacto y bloque de ubicación). Estuvo duplicado en cuatro
sitios y provocó una discrepancia real con la ficha de Google. Cualquier cosa que muestre o compruebe
el horario debe derivarse de `WEEK_SCHEDULE`; `isOpenNow()` calcula en `Europe/Madrid`, nunca con la
hora local del visitante.

### Blog: MDX en `content/posts/`

[lib/blog.ts](lib/blog.ts) lee los `.mdx` del disco con `gray-matter`; el nombre del archivo es el
slug. Frontmatter: `title`, `description`, `publishedAt` (YYYY-MM-DD), `image` (ruta absoluta de
/public), `author`, `category`, `tags`.

- **El `readingTime` del frontmatter se ignora**: se recalcula desde el contenido real (venía inflado).
- Las categorías son un conjunto cerrado en `BLOG_CATEGORIES`, con slug de URL en `CATEGORY_SLUGS`.
  Una categoría fuera de esa lista no genera página de categoría.
- Si `author` es distinto de "Dinaprint", el schema `Article` se emite como `Person` en lugar de
  `Organization` (E-E-A-T).
- El cuerpo se renderiza con `react-markdown` + `remark-gfm`, no con el pipeline MDX de Next.
- El flujo de alta previsto (también desde n8n) es: crear el `.mdx`, rellenar frontmatter y cuerpo,
  commit y push. No hay CMS.

### Sitemap: `lastmod` manual

[app/sitemap.ts](app/sitemap.ts) mantiene `ROUTE_LAST_MODIFIED`, un mapa ruta → fecha escrito a mano.
Deliberadamente **no** usa `new Date()`: si todas las páginas dicen modificarse en cada despliegue,
Google deja de fiarse del `lastmod` de todo el sitio. **Al editar de verdad una página estática, hay
que actualizar su fecha en ese mapa.**

### Guardas del build

- [scripts/check-images.mjs](scripts/check-images.mjs): toda ruta de imagen en `app/`, `components/`
  y `lib/` debe ser **absoluta** (empezar por `/`) y existir en `/public`. Rompe el build si no.
- [scripts/generate-og.mjs](scripts/generate-og.mjs): recorta a 1200x630 en `/public/og` cada imagen
  referenciada con `ogImage()` o usada como portada de artículo. Sin este paso, las medidas
  declaradas en los meta serían mentira.

### Componentes

`components/` sigue atomic design: `atoms/`, `molecules/`, `organisms/`, cada uno con un `index.ts`
barril. Se importan siempre desde el barril (`@/components/atoms`), no por ruta profunda. Alias de
rutas: `@/*` → raíz del proyecto.

### Patrón de página de catálogo

Las páginas de `app/catalogo/*` comparten estructura (ver [roll-up](app/catalogo/roll-up/page.tsx)
como referencia canónica): `metadata` con canonical + OG + twitter + keywords, constantes locales
`specRows` y `faqItems`, un `serviceSchema` de `buildServiceSchema`, y un render de
`<JsonLd>` × 2 + `<Product {...data} />` + `<FAQ items>`. Una página nueva de catálogo debe además
darse de alta en `ROUTE_LAST_MODIFIED` y, si toca, en `catalogOptions` de [lib/constants.ts](lib/constants.ts).

### Contenido editable sin tocar componentes

[lib/constants.ts](lib/constants.ts) concentra los textos y listados de la home, servicios, catálogo
y datos de contacto. Cambios de copy o de tarjetas van casi siempre ahí, no en el JSX.

## Estilos

Tailwind con paleta de marca en `tailwind.config.ts` (`primary` #ff6b00, `secondary` #18988b,
`font-primary`, `yellow-main`…). Usar esos tokens en vez de hex sueltos. Tipografía Montserrat vía
`next/font`. Plugin `@tailwindcss/typography` para el cuerpo de los artículos.

## Notas

- Analítica: Plausible self-hosted, script en [app/layout.tsx](app/layout.tsx).
- `NEXT_PUBLIC_SITE_URL` sobrescribe el dominio; por defecto `https://dinaprint.com`.
- Conviven `bun.lock` y `package-lock.json`; los scripts documentados van con npm.
- `.claude/`, `.agents/` y `skills-lock.json` están en `.gitignore`: son tooling de agentes, no parte
  de la aplicación.
