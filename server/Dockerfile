FROM node:lts-alpine

WORKDIR /usr/www/api

ENV PORT=3000

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]