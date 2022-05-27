FROM node:alpine

WORKDIR /code
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i

EXPOSE "80"
CMD ["npm", "run", "start"]