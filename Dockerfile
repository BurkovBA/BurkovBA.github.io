FROM node:18-alpine

ADD . /srv
WORKDIR /srv

# sharp needs python installed in Alpine
RUN apk add --update \
    python3 \
    python3-dev \
    py3-pip \
    build-base \
    autoconf \
    automake \
    make \
    gcc \
    g++ \
    libtool \
    pkgconfig \
    nasm \
    ffmpeg \
  && pip install --ignore-installed --break-system-packages virtualenv \
  && rm -rf /var/cache/apk/*

RUN npm install
RUN npm run build

CMD npm run serve
