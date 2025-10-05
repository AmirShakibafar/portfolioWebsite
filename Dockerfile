# --- Build stage ---
FROM node:24-alpine3.21 AS builder
WORKDIR /app

# Copy dependency files first (for better caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# --- Production (Runner) stage ---
FROM node:24-alpine3.21 AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed for runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev --prefer-offline

EXPOSE 3000
CMD ["npm", "start"]
