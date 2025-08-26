FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production && npm cache clean --force

FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 expressjs
>>>>>>> 9a81e52ba62210ef610435787ecc96b2da75232d
# Create a non-root user to run the application
RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs expressjs
=======
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 expressjs
>>>>>>> 9a81e52ba62210ef610435787ecc96b2da75232d

COPY --from=deps --chown=expressjs:nodejs /app/node_modules ./node_modules

COPY --chown=expressjs:nodejs . .

RUN mkdir -p /app/public && \
    chown -R expressjs:nodejs /app

USER expressjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get(process.env.HEALTHCHECK_URL || 'http://localhost:3000/', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) }).on('error', () => process.exit(1))"


CMD ["npm", "start"]