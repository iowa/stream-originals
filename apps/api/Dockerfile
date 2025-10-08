# Base image with dependencies
FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm turbo
ENV CI=true
RUN pnpm config set store-dir ~/.pnpm-store

# Prune workspace
FROM base AS pruner
ARG PROJECT=api
WORKDIR /app
COPY . .
RUN turbo prune --scope=${PROJECT} --docker

# Build isolated project
FROM base AS builder
ARG PROJECT=api
WORKDIR /app

COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

RUN --mount=type=cache,id=pnpm,target=~/.pnpm-store pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .

RUN turbo build --filter=${PROJECT}
RUN rm -rf ./**/*/src

# Production image
FROM node:24-alpine AS runner
RUN apk add --no-cache libc6-compat
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

WORKDIR /app
COPY --from=builder /app .

USER nodejs
ARG PROJECT=api
WORKDIR /app/apps/${PROJECT}

ENV NODE_ENV=production
ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}

ENTRYPOINT ["node", "dist/index.js"]
