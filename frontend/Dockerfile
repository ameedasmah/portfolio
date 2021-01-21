FROM node:14.15.0-alpine as build

WORKDIR /app/frontend

COPY package.json package-lock.json ./

RUN npm install 

COPY . ./

RUN npm run build

EXPOSE 3000
