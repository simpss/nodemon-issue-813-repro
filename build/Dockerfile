FROM debian:stretch
MAINTAINER Siim <siim@aiotex.com>
RUN apt-get update && apt-get install -y \
    sudo \
    apt-utils \
    curl \
    git \
    wget \
    gnupg2 \
    vim \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get update && apt-get install -y nodejs build-essential libfontconfig && rm -rf /var/lib/apt/lists/*
RUN npm install -g ts-node typescript path nodemon@1.17.1 lerna@2.2.0

WORKDIR /opt
ADD packages/ /opt/packages/
RUN rm -rf /opt/packages/nodemon-repro/node_modules

RUN lerna init && lerna bootstrap
WORKDIR /opt/packages/package

CMD ["npm", "run", "serve:dev"]
