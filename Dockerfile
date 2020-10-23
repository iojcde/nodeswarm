FROM node
RUN mkdir -p /usr/src/app
COPY index.js /usr/src/app
COPY public /usr/src/app/public
COPY router /usr/src/app/router
EXPOSE 8080
CMD [ "node", "/usr/src/app/index" ]

