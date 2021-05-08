FROM node:14.4-alpine3.11

WORKDIR /usr/www/api

ENV PORT=3000

COPY . .

RUN npm install -g nodemon

RUN npm install && npm clean --force

CMD ["nodemon", "app.js"]