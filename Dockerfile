FROM node:9-alpine

ADD . /srv
WORKDIR /srv

RUN npm install
RUN npm run build

CMD npm run start
