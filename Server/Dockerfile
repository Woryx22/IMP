FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY Server . 

ENV PORT=4000
EXPOSE 4000


CMD ["node", "index.js", "--port", "4000"]
