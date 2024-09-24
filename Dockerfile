FROM node:20.17.0-bullseye

ARG REACT_APP_BACKEND

ENV REACT_APP_BACKEND=${REACT_APP_BACKEND}

WORKDIR /minimal-frontend
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]