FROM node:alpine

WORKDIR /code
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# RUN npm ci
# RUN npm install
# ENV NODE_OPTIONS=--max_old_space_size=512
# ENV GENERATE_SOURCEMAP false
RUN npm install --save --legacy-peer-deps

EXPOSE "3000"
CMD ["npm", "run", "start"]