# build environment
FROM node:lts-alpine as build
WORKDIR /usr/www/client
ENV PATH /node_modules/.bin:$PATH
COPY package.json /usr/www/client/package.json
RUN npm install --silent
RUN npm install @vue/cli@3.7.0 -g
COPY . /usr/www/client
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /usr/www/client/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
