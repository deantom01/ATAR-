FROM node:18.16.1-alpine3.17 as BUILDER

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:18.16.1-alpine3.17 as RUNNER

WORKDIR /app
COPY --from=BUILDER /app/build /app/build

RUN npm install -g serve

CMD ["npx", "serve", "-s", "/app/build"]