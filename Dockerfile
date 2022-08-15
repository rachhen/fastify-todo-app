FROM node:16-alpine

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock

RUN cd /tmp && yarn --pure-lockfile

ADD ./ /src

RUN cp -a /tmp/node_modules /src/node_modules

WORKDIR /src

RUN npm run-script build

EXPOSE 4000

CMD ["node", "build/src/app.js"]