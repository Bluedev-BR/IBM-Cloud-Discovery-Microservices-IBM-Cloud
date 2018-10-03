FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4500

EXPOSE 4500

CMD [ "npm", "start" ]