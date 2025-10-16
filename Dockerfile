FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

FROM node:18-slim AS runner
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000
# added: healthcheck so compose can detect readiness via /health
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http=require('http');const p=process.env.PORT||3000;const req=http.get({host:'127.0.0.1',port:p,path:'/health'},res=>{if(res.statusCode===200)process.exit(0);else process.exit(1)});req.on('error',()=>process.exit(1));"
CMD ["npm", "start"]
