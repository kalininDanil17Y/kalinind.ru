#docker hub:  danilo9/kalinind.ru

FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18 AS run
WORKDIR /app
ENV PORT=8787
ENV HOST=0.0.0.0
COPY --from=build /app .
EXPOSE 8787
CMD ["node", "./dist/server/entry.mjs"]