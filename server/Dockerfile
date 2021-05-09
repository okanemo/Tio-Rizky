FROM node:lts-alpine

RUN mkdir -p /usr/www/api
WORKDIR /usr/www/api

ENV PORT=3000

COPY . /usr/www/api

RUN npm install -g nodemon

RUN npm install

CMD ["npm", "run", "dev"]