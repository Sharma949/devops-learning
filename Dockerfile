# ---------- Stage 1: Build ----------
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- Stage 2: Run ----------
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8000
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY public ./public
EXPOSE 8000
CMD ["node", "dist/index.js"]