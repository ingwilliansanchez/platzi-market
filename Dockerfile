# Docker Image responsible for setting up and Angular environment
FROM node:26-alpine3.23 AS initial

RUN apk add --no-cache git make g++ python3

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

# This stage responsible for setting up the Angular development enviroment. 
# This is a link to connect to devcontainers
FROM initial AS enviroment_dev

WORKDIR /usr/src/app

ENV ANGULAR_RUN_HOST=0.0.0.0

RUN git config --global user.email "ing.williansanchez@gmail.com" && git config --global user.name "Willian Sanchez in Container 🐋"

RUN chown -R node:node /usr/src/app

USER node

EXPOSE 4200

CMD ["/bin/sh", "tail", "-f", "/dev/null"]

FROM enviroment_dev AS server_dev

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]