FROM node:alpine

WORKDIR /code
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# RUN npm ci
# RUN npm install
RUN npm install --save react-tinder-card --legacy-peer-deps

EXPOSE "80"
CMD ["npm", "run", "start"]