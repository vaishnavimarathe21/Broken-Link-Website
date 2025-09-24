# syntax=docker/dockerfile:1.7

########################################
# 1) Base image with Node.js and pnpm
########################################
FROM node:20-alpine AS base
# Set PNPM home and add it to PATH
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
# Enable Corepack for package manager management
RUN corepack enable
# Set working directory
WORKDIR /app

########################################
# 2) Cache dependencies
########################################
FROM base AS deps
# Copy lockfile and package manifest
COPY pnpm-lock.yaml package.json ./
# Use a cache mount for pnpm store to speed up repeated builds
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm fetch

########################################
# 3) Build (TypeScript compilation + Vite build)
########################################
FROM base AS build
# Copy all source files
COPY . .
# Install dependencies using cached pnpm store
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile
# Build the project
RUN pnpm build

########################################
# 4) Runtime – nginx with SPA fallback
########################################
FROM nginx:1.27-alpine AS runtime
# Remove default nginx config and create custom config for SPA
RUN rm -f /etc/nginx/conf.d/default.conf && \
    printf '%s\n' \
    'server {' \
    '  listen       6006;' \                  # Set port to 6006
    '  server_name  _;' \
    '  root   /usr/share/nginx/html;' \
    '  index  index.html;' \
    '  location / {' \
    '    try_files $uri $uri/ /index.html;' \  # SPA fallback
    '  }' \
    '  location ~* \.(?:js|css|svg|png|jpg|jpeg|gif|ico|woff2?)$ {' \
    '    expires 30d;' \                        # Cache static assets
    '    access_log off;' \
    '  }' \
    '}' \
    > /etc/nginx/conf.d/app.conf

# Copy built frontend files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 6006
EXPOSE 6006
# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
