FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

ENV PORT=80
EXPOSE 80


CMD ["npm", "start", "--port", "80"]
