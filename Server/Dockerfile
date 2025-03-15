FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY Server . 

EXPOSE 4000

CMD ["node", "index.js"]
