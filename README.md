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

## now run this in bash or terminal

```bash
docker build -t my_node_app:1.0 .
```
