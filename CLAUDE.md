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

### FAQ: el schema lo emite el componente

[components/atoms/FAQ](components/atoms/FAQ/index.tsx) pinta el acordeón **y** su `FAQPage` JSON-LD a
partir de los mismos `items`. No hay que añadir el schema a mano: basta con renderizar `<FAQ>` con un
`faqItems` local de la página. Corolario: **un solo `<FAQ>` por página**, o se emiten dos `FAQPage` y
los rastreadores los concatenan. `Catalog` y `Contact` reciben la FAQ por prop opcional (`faqItems`)
para poder pintarla antes del CTA final; el resto de páginas la renderizan directamente en el `page.tsx`.
Llevan FAQ la home, `/servicios`, `/catalogo`, `/contacto`, las tres páginas de zona y las once de catálogo.

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

### `llms.txt`: índice para modelos de lenguaje

[app/llms.txt/route.ts](app/llms.txt/route.ts) genera `/llms.txt` en el formato de llmstxt.org (H1,
resumen en cita, listas de enlaces por H2 y sección `Optional` al final). Se construye desde las
fuentes reales — horario de `lib/hours.ts`, artículos de `lib/blog.ts` — para no quedarse obsoleto al
publicar. Va con `dynamic = "force-static"`: la imagen de runtime no incluye `content/`, así que
tiene que resolverse en el build igual que el sitemap. **Al añadir una página estática nueva hay que
darla de alta también aquí**, no solo en `ROUTE_LAST_MODIFIED`.

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

## Despliegue (Docker / Coolify)

El [Dockerfile](Dockerfile) construye en tres etapas y publica la salida `standalone`
(`output: "standalone"` en [next.config.js](next.config.js)): la imagen final solo lleva
`server.js`, `.next/static` y `/public`, sin devDependencies ni código fuente. El contenedor
escucha en **3001** (`PORT`/`HOSTNAME` ya fijados) y arranca con `node server.js`, no con `next start`.

- Las `NEXT_PUBLIC_*` se incrustan en el bundle durante el build: en Coolify hay que marcarlas
  como variables **de build**, y están declaradas como `ARG` en el Dockerfile. Si falta
  `NEXT_PUBLIC_SITE_URL`, el sitio se despliega con el dominio por defecto.
- Healthcheck: [app/api/health/route.ts](app/api/health/route.ts) devuelve `200` con el cuerpo
  exacto `OK`. Es la ruta que debe apuntar Coolify (`/api/health`, puerto 3001), no `/`.

## Notas

- Analítica: Plausible self-hosted, script en [app/layout.tsx](app/layout.tsx).
- `NEXT_PUBLIC_SITE_URL` sobrescribe el dominio; por defecto `https://dinaprint.com`.
- Conviven `bun.lock` y `package-lock.json`; los scripts documentados van con npm.
- `.agents/`, `skills-lock.json` y casi todo `.claude/` están en `.gitignore`: son tooling de
  agentes, no parte de la aplicación. Las excepciones versionadas son
  [.claude/settings.json](.claude/settings.json) y [.claude/hooks/](.claude/hooks/), que sí se
  comparten con el equipo (ver abajo). `.claude/settings.local.json` sigue siendo personal.

## Hooks del repositorio

Dos hooks de `PostToolUse` se ejecutan tras cada edición de fichero, declarados en
[.claude/settings.json](.claude/settings.json):

- [biome-write.py](.claude/hooks/biome-write.py) pasa `biome check --write` (solo correcciones
  seguras) por el fichero recién tocado, usando el binario de `node_modules`. Evita descubrir en el
  build fallos de formato que Biome arregla solo.
- [sitemap-lastmod.py](.claude/hooks/sitemap-lastmod.py) avisa —no bloquea— cuando se edita un
  `app/**/page.tsx` cuya fecha en `ROUTE_LAST_MODIFIED` no es la de hoy. No escribe la fecha a
  propósito: un `lastmod` que se mueve en cada retoque es justo lo que `app/sitemap.ts` documenta
  como contraproducente, así que la decisión sigue siendo manual. Las rutas dinámicas del blog se
  ignoran, porque su fecha sale del frontmatter.
- [check-images.py](.claude/hooks/check-images.py) ejecuta `scripts/check-images.mjs` (0,2 s) al
  editar cualquier fichero de `app/`, `components/`, `lib/` o `content/`. Adelanta al momento de la
  edición el guardián que hasta ahora solo corría en el build. Invoca el script real, no una copia
  de sus regex, para que hook y build no puedan divergir.

Y uno de `PreToolUse`:

- [protect-lockfiles.py](.claude/hooks/protect-lockfiles.py) deniega editar `package-lock.json`,
  `bun.lock` y compañía a mano. Con dos lockfiles conviviendo, desincronizarlos produce builds que
  pasan en local y fallan en Docker.

## Subagente y skill del proyecto

- [seo-page-reviewer](.claude/agents/seo-page-reviewer.md): revisa una página contra las convenciones
  de este fichero (esparcido de `OG_DEFAULTS`, canonical, `ogImage()`, `localBusiness` por página, un
  solo `<FAQ>`, alta en `ROUTE_LAST_MODIFIED` y en `llms.txt`). Verifica sobre el HTML de
  `.next/server/app/`, no solo leyendo el JSX. Conviene pasarlo tras crear o tocar un `page.tsx`.
- [nuevo-post](.claude/skills/nuevo-post/SKILL.md): alta de un artículo del blog. Incluye el paso que
  más disgustos evita —comprobar solapamiento con lo ya publicado antes de escribir, para no
  canibalizar— además del frontmatter válido, la verificación de enlaces internos y el criterio de
  fechas.
