# Docker Provider Template

## Description

This is a template for a docker provider. It is a nodejs application that can be run in a docker container. It is a simple express server that exposes a REST API to be used by the Petam.io platform.

## Requirements

- Nodejs 16 minimum

## Usage

```sh
curl --location --request GET '${URL_DEL_DOCKER}/?target_address=${TARGET_SCAN} \
--header 'JWT: 123' \
--header 'webhook_url: ${URL_DE_RETORN}' \
# To test the docker provider locally you can use the following website https://requestcatcher.com/ to get the webhook_url
```

## Development proccess

1. canviar el nom del projecte al package.json
2. fer npm install
3. modificar el fitxer provider.js amb la implementacio del proveidor
4. fer npm run start per testejar la aplicacio en local
5. modificar el fitxer Dockerfile amb les dependencies necessaries per la imatge
6. fer npm run docker:build per crear la imatge
7. fer npm run docker:run per testejar la imatge en local
8. fer npm run docker:push per pujar la imatge al registry (Unicament desde ESED)

## Run app

### Run scripts localy

```sh
npm start
```

### Run scripts in docker

```sh
npm run docker:build
npm run docker:run
```
