FROM node:18-alpine3.14


# # add `/app/node_modules/.bin` to the $PATH
# ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY /package.json /app/package.json
COPY /tailwind.config.js /app/tailwind.config.js


RUN npm install
RUN npm install -dev

CMD echo 'Image Builded - docker-react'