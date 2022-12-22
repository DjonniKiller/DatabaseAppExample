FROM node:18.12.1-alpine
COPY . /usr/src/backend
#Права
#RUN chmod -R 777 .
WORKDIR /usr/src/backend
#USER zheka
CMD [ "npm", "run", "dev" ]
EXPOSE 8080