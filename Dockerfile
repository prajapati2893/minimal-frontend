FROM node:20.17.0-bullseye

ENV REACT_APP_BACKEND = http://localhost:8080/api

WORKDIR /minimal-frontend
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]