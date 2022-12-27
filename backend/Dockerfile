FROM node:18.12.1-alpine
COPY . /usr/src/backend

WORKDIR /usr/src/backend

RUN npm i knex -g

CMD [ "npm", "run", "dev" ]

EXPOSE 8080

#RUN knex migrate:latest --env mainConnection