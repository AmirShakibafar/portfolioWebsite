FROM node:24-alpine3.21 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24-alpine3.21 AS runner
WORKDIR /app
COPY --from=builder /app .
CMD ["npm", "run", "start"]
