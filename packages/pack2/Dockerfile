FROM node:16-alpine AS builder
WORKDIR /app

RUN apk -U upgrade
RUN apk add git

COPY package*.json ./
RUN npm ci

COPY ./ .
RUN npx lerna bootstrap --since
RUN npx lerna run build --scope test-lerna-pack2


# RUN ["npm", "ci"]
# RUN ["npm", "run", "affected"]
# RUN ["npm", "ci"]
# COPY . .
# CMD ["npm", "run", "build"]

# FROM node:16-alpine AS production
# WORKDIR /app
# COPY package*.json ./
# COPY .npmrc /root/.npmrc
# RUN ["npm", "ci", "--production"]
# COPY --from=builder /app/.next .next
# COPY public public
# COPY next.config.js ./
# COPY sentry.client.config.js ./
# COPY sentry.server.config.js ./
# COPY config config
# EXPOSE 3000
# ENTRYPOINT ["npm", "run", "start"]
