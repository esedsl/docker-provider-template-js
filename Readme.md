# Docker Provider Template

## Development proccess

1. canviar el nom del projecte al package.json 
2. fer npm install
3. modificar el fitxer provider.js amb la implementacio del proveidor
4. fer npm run start per testejar la aplicacio en local
5. modificar el fitxer Dockerfile amb les dependencies necessaries per la imatge
6. fer npm run docker:build per crear la imatge
7. fer npm run docker:run per testejar la imatge en local
8. fer npm run docker:push per pujar la imatge al registry


## Run app

### Run scripts localy 
``` sh
npm start
```

### Run scripts in docker

``` sh
npm run docker:build
npm run docker:run
```
