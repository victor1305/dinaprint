# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este proyecto

Sitio web corporativo de **Dinaprint**, imprenta en Pinto (sur de Madrid). Next.js 14 (App Router),
TypeScript, Tailwind. Es un sitio estático de marketing orientado a SEO local: no hay base de datos,
ni autenticación. La única API es la del formulario de contacto, que envía por SMTP propio.

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
- El `localBusiness` schema se emite **solo en las páginas que son la ficha del negocio**: la home,
  `/contacto` y las tres de zona. Nunca en el layout (los rastreadores concatenarían JSON-LD
  duplicado) y ya no en catálogo ni en el blog: llegó a estar en 23 páginas, incluido cada artículo,
  y así ninguna destacaba como la ficha local. En una ficha de catálogo el vínculo con la empresa lo
  aporta el `provider` de `buildServiceSchema`; en un artículo, el `publisher` de `getArticleSchema`.

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
`specRows`, `contentSections` y `faqItems`, un `serviceSchema` de `buildServiceSchema`, y un render
de `<JsonLd data={serviceSchema} />` + `<Product {...data} />` + `<FAQ items>`. Una página nueva de
catálogo debe además darse de alta en `ROUTE_LAST_MODIFIED`, en `llms.txt` y, si toca, en
`catalogOptions` de [lib/constants.ts](lib/constants.ts).

`Product` pinta también `<Breadcrumbs>` (con su `BreadcrumbList`) y `<RelatedProducts>`, tres fichas
relacionadas sacadas de `relatedProducts` en [lib/constants.ts](lib/constants.ts). Los dos resuelven
la ficha por la URL, así que la página no pasa nada. Existen porque el rastreo de septiembre de 2026
contó que las fichas no se enlazaban entre sí: cartas y menús recibía enlaces desde 3 páginas y
calendarios desde 5. **Una ficha nueva debe entrar en `relatedProducts`** (como origen y como destino
de alguna otra) y, si su slug no se formatea bien solo, en el `nameMap` de `Breadcrumbs`.

El objeto `data` que recibe `Product` lleva tres campos que existen por lo que contaba Search
Console del trimestre jun-sep 2026 (fichas a posición media 44, 5 clics en tres meses):

- **`sections`** (`ProductSection[]`, la constante `contentSections`): el contenido largo y propio de
  la ficha, bajo la tabla de especificaciones. Criterio de compra real —qué material elegir según el
  uso, qué se pide mal, qué hay que decidir antes de presupuestar—, no descripción genérica. Las
  fichas cortas rondaban las 700 palabras; con esto pasan de 1.000.
- **`localProduct`** (string en minúscula y plural): activa `<LocalCoverage>`, el bloque de cobertura
  con dirección, recogida en taller y enlaces a las tres páginas de zona.
- **`h1`** y el `title`: llevan **modificador local** ("en Madrid"). Los términos nacionales secos
  ("papelería corporativa", "impresión de catálogos") salían en posición 45-70; las variantes con
  ciudad, en 20-45. Es el terreno ganable, así que las fichas nuevas se nombran igual.

`/catalogo/cartas-y-menus` y `/catalogo/catalogos` no usan `Product` —tienen maquetación propia— pero
sí montan `<LocalCoverage>` a mano antes del `<KnowMore>`.

### Blog → catálogo: `lib/related-service.ts`

Cada artículo declara ahí la ficha de catálogo que le corresponde, y la plantilla de
[app/blog/[slug]](app/blog/[slug]/page.tsx) pinta con ella un `<ServiceCallout>` antes del cuerpo y
otro, en variante `cta`, al cerrar.

Existe porque los artículos estaban canibalizando a las fichas: el post de cartas y menús acumulaba
4.966 impresiones y 47 clics mientras `/catalogo/cartas-y-menus` se quedaba literalmente en cero, y
lo mismo entre el de catálogos (1.794) y `/catalogo/catalogos` (339). El artículo capta la búsqueda
informacional; el callout es lo que lleva a la página que pide presupuesto, y de paso da a las fichas
los enlaces contextuales que no tenían.

**Un artículo nuevo debe darse de alta en ese mapa.** Si no aparece, no se rompe nada: cae en el CTA
genérico hacia `/contacto`, pero pierde el enlace a la ficha.

### Contenido editable sin tocar componentes

[lib/constants.ts](lib/constants.ts) concentra los textos y listados de la home, servicios, catálogo
y datos de contacto. Cambios de copy o de tarjetas van casi siempre ahí, no en el JSX.

### Formulario de contacto: `app/api/contacto`

El envío ya no se hace desde el cliente. Antes iba con EmailJS y las tres credenciales incrustadas
en el bundle (`NEXT_PUBLIC_FORM_*`); dependía de un token OAuth de Gmail que caducó sin avisar y la
API devolvía `Gmail_API: Invalid grant` en cada intento.

- `GET /api/contacto` entrega el reto anti-robots y `POST /api/contacto` envía. Runtime Node y
  `force-dynamic`. Lee `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_TO`,
  `CONTACT_FROM` y la opcional `CONTACT_SECRET` **en cada petición**: son variables de runtime, no
  build args, así que no quedan escritas en ninguna capa de la imagen.
- **Salen dos correos.** El aviso interno va al buzón con `replyTo` del visitante, así que responder
  le escribe directamente. El acuse de recibo va al visitante con `replyTo` del buzón y con las
  cabeceras `Auto-Submitted: auto-replied` y `X-Auto-Response-Suppress`, que evitan un bucle si su
  servidor también autorresponde. El acuse va en su propio `try`: si falla, el aviso interno ya salió
  y el contacto no se pierde, de modo que al visitante no se le devuelve error.
- El remitente es siempre el buzón propio y el visitante va en `replyTo`. Poner su dirección en
  `from` rompe SPF y DKIM y manda el aviso a spam.
- El acuse de recibo saca el horario de `formatBusinessHours()`, para no duplicarlo. El teléfono es
  solo el 678 519 404, en la constante `AUTO_REPLY_PHONE` de la ruta: `findBoxes` junta los dos
  números en una cadena y no permite ofrecer uno solo.
- **El captcha se valida en el servidor.** `GET` sortea la suma, la firma con HMAC junto a un nonce y
  el instante, y devuelve solo los sumandos y el token; la solución nunca viaja al cliente. En el
  `POST` se vuelve a firmar con la respuesta recibida y se compara. El reto caduca a los 30 minutos,
  se rechaza si llega antes de 3 segundos (ningún humano rellena tan rápido) y el nonce es de un solo
  uso, así que no se puede reutilizar. Antes la suma se comprobaba solo en el navegador y bastaba con
  llamar al endpoint a pelo para saltársela.
- Resto de defensas: honeypot (campo `company`, oculto; si viene lleno se responde 200 para no avisar
  al bot), comprobación de `Origin`, límite de 5 envíos por IP cada 10 minutos, longitudes máximas y
  saneado de saltos de línea en las cabeceras.
- **`Origin` se compara con la cabecera `Host` y con `NEXT_PUBLIC_SITE_URL`, nunca con
  `request.url`.** En la salida standalone `request.url` siempre dice `http://localhost:<puerto>`, así
  que detrás del proxy de Coolify no coincidiría jamás con `https://dinaprint.com` y el endpoint
  rechazaría todos los envíos buenos.
- Los límites por IP, los nonces gastados y la clave del captcha viven **en memoria del proceso**, así
  que todo esto asume **una sola réplica** del contenedor. Con varias habría que fijar
  `CONTACT_SECRET` y sacar los contadores fuera.
- El componente [ContactForm](components/molecules/ContactForm/index.tsx) solo pinta "Formulario
  enviado!" cuando el servidor lo confirma. La versión anterior marcaba el éxito de forma síncrona,
  fuera de la promesa, y mandaba el error a `console.log`: por eso el fallo de EmailJS estuvo meses
  sin detectarse. Cualquier cambio ahí debe mantener el estado de error visible.

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
- Las credenciales SMTP del formulario van como variables **de runtime** en Coolify, no de build.
  Si faltan, `/api/contacto` responde 500 y lo deja escrito en el log del contenedor.

## Notas

- Analítica: Plausible self-hosted, script en [app/layout.tsx](app/layout.tsx).
- `NEXT_PUBLIC_SITE_URL` sobrescribe el dominio; por defecto `https://dinaprint.com`.
- El dominio canónico es el **apex**. `next.config.js` redirige `www` con un 308 permanente; antes lo
  resolvía Cloudflare con un 307 temporal y Search Console lo contaba como propiedad aparte.
  **A 14 sep 2026 producción sigue devolviendo el 307** (`server: cloudflare`): la regla del panel de
  Cloudflare responde antes de que la petición llegue a Next, así que el 308 no se ejecuta hasta que
  se borre. `dinaprint.es` tampoco está bien: un Apache antiguo responde 302 hacia
  `http://dinaprint.com` (tres saltos hasta la home) y `https://dinaprint.es` no contesta.
- **El `robots.txt` que se sirve no es solo el de la app.** Cloudflare le antepone un bloque
  "Managed content" que hoy prohíbe GPTBot, ClaudeBot, Google-Extended, CCBot, Amazonbot,
  Applebot-Extended, Bytespider y meta-externalagent, y marca `ai-train=no`. Son rastreadores de
  **entrenamiento**: los de búsqueda (OAI-SearchBot, PerplexityBot) no están en la lista y
  Google-Extended no afecta a los AI Overviews, así que [/llms.txt](app/llms.txt/route.ts) sigue
  siendo legible para las respuestas con búsqueda. Se decide en el panel de Cloudflare, no en el repo.
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
  de este fichero (esparcido de `OG_DEFAULTS`, canonical, `ogImage()`, `localBusiness` solo en home /
  contacto / zonas, un solo `<FAQ>`, alta en `ROUTE_LAST_MODIFIED` y en `llms.txt`). Verifica sobre el HTML de
  `.next/server/app/`, no solo leyendo el JSX. Conviene pasarlo tras crear o tocar un `page.tsx`.
- [nuevo-post](.claude/skills/nuevo-post/SKILL.md): alta de un artículo del blog. Incluye el paso que
  más disgustos evita —comprobar solapamiento con lo ya publicado antes de escribir, para no
  canibalizar— además del frontmatter válido, la verificación de enlaces internos y el criterio de
  fechas.
