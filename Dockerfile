FROM node:10.15.3

WORKDIR /app

COPY . /app

RUN npm i pm2 -g \
    && npm i \
    && npm run build

EXPOSE 3300

CMD ["npm", "prod"]
