# code for dockerfile

```dockerfile
FROM node:alpine

WORKDIR /app

COPY package.* .
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
```

## dockerfile with multi stage build

```bash
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["npm", "start"]

FROM node:18-slim AS runner
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]

```

## now run this in bash or terminal

```bash
docker build -t my_node_app:1.0 .
```
