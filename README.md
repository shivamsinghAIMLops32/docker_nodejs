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

## Docker yaml file to run multiple services 
```bash
version: "3.8"

services:
  web:
    build: .
    container_name: my_node_container
    image: my_node_image
    ports:
      - "3000:3000"
    expose:
      - 3000
    env_file:
      - .env
```

## now run this in bash or terminal

```bash
docker build -t my_node_app:1.0 .
```
