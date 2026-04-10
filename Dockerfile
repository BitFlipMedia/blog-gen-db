FROM node:20-alpine

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

# Copy package manifests first for layer caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies (ignore-workspace since this is a standalone app)
RUN pnpm install --ignore-workspace --frozen-lockfile

# Copy source
COPY . .

EXPOSE 3000

# pnpm dev runs Next.js dev with wrangler getPlatformProxy for local D1/R2
CMD ["pnpm", "dev"]
