# Base Node image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy root package.json and turbo config for caching
COPY package.json turbo.json ./

# Copy only the necessary workspaces
COPY apps/api/package.json ./apps/api/
COPY packages/common/package.json ./packages/common/

# Install dependencies
RUN npm install --workspace apps/api --frozen-lockfile

# Copy source code
COPY apps/api ./apps/api
COPY packages/common ./packages/common

# Build the app
RUN npx turbo run build

# Set working directory to app
WORKDIR /usr/src/app/apps/api

# Expose Cloud Run port
EXPOSE 8080

# Start the server
CMD ["node", "dist/index.js"]
