FROM node:20.11-alpine as dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:20.11-alpine as builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

CMD ["npm", "run build"]
