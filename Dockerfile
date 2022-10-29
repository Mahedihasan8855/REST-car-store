FROM node:14-alpine

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn

COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]
