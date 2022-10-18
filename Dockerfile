FROM node:16-alpine3.15

WORKDIR /home/node/code

# Install dependencies
# RUN apk update && apk add --no-cache --upgrade dependencia

COPY --chown=node:node package*.json .
RUN npm ci --only=prod

COPY --chown=node:node main.js .
COPY --chown=node:node provider.js .

EXPOSE 8080

CMD ["node", "main.js"]