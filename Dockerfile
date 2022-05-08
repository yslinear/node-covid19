FROM node:16-alpine3.14

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080


ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080
ENV API_URL=http://go:8082/

CMD [ "npm", "start" ]