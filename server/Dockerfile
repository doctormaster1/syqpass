FROM node:20.11-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

USER node

CMD ["npm", "start"]

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:4000 || exit 1
