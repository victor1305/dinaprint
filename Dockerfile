# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Dinaprint — imagen de producción (Next.js 14 en modo standalone).
#
# Tres etapas para que la imagen final solo lleve el runtime: sin código
# fuente, sin devDependencies y sin el node_modules completo. Con esto el
# contenedor arranca en ~100 MB de RAM en vez de compilar en cada despliegue.
# ---------------------------------------------------------------------------

FROM node:22-alpine AS base
# libc6-compat evita los fallos de binarios precompilados (sharp) en Alpine.
RUN apk add --no-cache libc6-compat


# --- Dependencias ----------------------------------------------------------
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci


# --- Build -----------------------------------------------------------------
FROM base AS builder
WORKDIR /app

# Las NEXT_PUBLIC_* se incrustan en el bundle durante el build, así que tienen
# que llegar como build args. En Coolify: marcar estas variables como
# "Build Variable / Available at Buildtime".
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_FORM_SERVICE
ARG NEXT_PUBLIC_FORM_TEMPLATE
ARG NEXT_PUBLIC_FORM_KEY
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
	NEXT_PUBLIC_FORM_SERVICE=$NEXT_PUBLIC_FORM_SERVICE \
	NEXT_PUBLIC_FORM_TEMPLATE=$NEXT_PUBLIC_FORM_TEMPLATE \
	NEXT_PUBLIC_FORM_KEY=$NEXT_PUBLIC_FORM_KEY

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# check-images + generate-og + next build (ver package.json).
RUN npm run build


# --- Runtime ---------------------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	PORT=3001 \
	HOSTNAME=0.0.0.0

# wget (busybox) y curl: Coolify ejecuta su healthcheck dentro del contenedor
# con uno de los dos. Sin ninguno, el check falla siempre aunque la app esté viva.
RUN apk add --no-cache curl

RUN addgroup --system --gid 1001 nodejs \
	&& adduser --system --uid 1001 nextjs

# /public incluye los recortes OG generados durante el build.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=10 \
	CMD curl -fsS http://localhost:3001/api/health | grep -q OK || exit 1

CMD ["node", "server.js"]
