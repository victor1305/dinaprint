---
name: nuevo-post
description: Crea un artículo nuevo del blog de Dinaprint en content/posts/ con frontmatter válido, comprobando categoría, imagen, solapamiento con posts existentes y enlaces internos. Úsalo cuando se pida escribir, redactar o añadir un artículo o post al blog.
---

# Alta de un artículo del blog

El blog son ficheros `.mdx` en `content/posts/`. **El nombre del fichero es el
slug de la URL.** No hay CMS: crear el fichero, rellenarlo, commit y push.

## 1. Antes de escribir: comprobar solapamiento

Es el paso que más disgustos evita. Publicar un artículo que repite uno existente
provoca canibalización: dos URLs propias compitiendo por la misma consulta y
repartiéndose las señales en lugar de sumarlas.

```bash
ls content/posts/ | sed 's/\.mdx$//'
grep -l "<palabra clave>" content/posts/*.mdx
```

Si ya existe algo cercano, hay dos salidas legítimas, y **hay que decírselo al
usuario antes de escribir**:

- **Reangular**: escribir el nuevo con una intención de búsqueda distinta
  (proceso vs. comparativa, decisión de compra vs. materiales) y enlazar ambos
  entre sí en las dos direcciones.
- **Ampliar el existente** en lugar de crear uno nuevo.

## 2. Frontmatter

```yaml
---
title: "..."
description: "..."        # ~155 caracteres, sin cortar a mitad de palabra
publishedAt: "YYYY-MM-DD"
image: "/fichero.jpg"     # ruta absoluta, tiene que existir en /public
author: "Dinaprint"
category: "Guías"         # conjunto CERRADO, ver abajo
tags: ["...", "..."]
---
```

- **`category` solo puede ser** `Guías`, `Consejos`, `Tendencias` o
  `Casos de éxito` (`BLOG_CATEGORIES` en `lib/blog.ts`). Cualquier otra cosa no
  genera página de categoría.
- **`readingTime` no se pone**: se recalcula desde el contenido real. El del
  frontmatter se ignora porque venía inflado.
- **`author`**: si es distinto de "Dinaprint", el schema `Article` se emite como
  `Person` en lugar de `Organization`.
- **`image`**: comprueba que existe (`ls public/<fichero>`). El build recorta la
  portada a 1200×630 en `/public/og`.

## 3. Fechas

Repartir las fechas cuando se crean varios artículos, sin dos iguales.
**No retrodatar** para rellenar huecos del archivo: afirma una fecha de
publicación falsa y además perjudica —el contenido pierde señal de frescura y
aterriza en las páginas profundas del listado, donde tarda más en rastrearse—.

```bash
grep -h '^publishedAt:' content/posts/*.mdx | sort | tail -5
```

## 4. Cuerpo

Estilo de la casa: 1.400-1.800 palabras, encabezados `##`, tono práctico y
concreto, sin relleno. Se renderiza con `react-markdown` + `remark-gfm`, **no**
con el pipeline MDX de Next: nada de componentes JSX dentro del cuerpo.

Termina siempre con una sección `## Te puede interesar` con 3 enlaces internos.

## 5. Enlaces internos: verificar que resuelven

Enlaza a catálogo (`/catalogo/...`), páginas de zona (`/imprenta-madrid`,
`/imprenta-sur-de-madrid`, `/imprenta-pinto`) y otros artículos. Comprueba que
cada uno existe antes de dar el trabajo por bueno:

```bash
# rutas de app/
find app -name page.tsx | sed 's|^app||;s|/page.tsx$||;s|^$|/|'
# slugs de artículos
ls content/posts/*.mdx | xargs -n1 basename | sed 's/\.mdx$//'
```

Si el nuevo artículo complementa a uno existente, **añade también el enlace
inverso** en el «Te puede interesar» del antiguo.

## 6. Comprobación final

```bash
npm run build
```

El build valida las rutas de imagen y genera el recorte OG. El artículo entra
solo en `sitemap.xml` y en `/llms.txt` —ambos leen `getAllPosts()`—, así que **no
hay que darlo de alta a mano en ninguna parte**. `ROUTE_LAST_MODIFIED` es solo
para páginas estáticas, no para artículos.
