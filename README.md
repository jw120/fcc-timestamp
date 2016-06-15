# FreeCodeCamp Timestamp Microservice exercise

Very simple Express REST server implemented with TypeScript.

Testing with Mocha, Chai/Expect and Fetch.

Git is used as the tool to sync to Heroku, but this is kept seperate from our
source git repo (in the deploy sub-directory). This means all heroku commands need to be
run within the deploy sub-directory (which is done automatically via the npm run commands)

## TODO

* DONE Git checkin
* DONE Add tests
* Get Heroku working again
* Trim node_modules and typings
* watch video
* Check date format output
* Add / page statically served
* Submit to fcc

## Ways to run

### 1. From local src dir

For use testing during development

```bash
npm run compile (if not compiled by VS Code's Build)
npm run src-start (which does node src/server.js)
```

### 2. From local deploy dir

To test deployment before pushing to heroku

```bash
npm run compile
npm run build
npm run local-install (which does npm install in the deploy directory)
npm run local-start (which does heroku local in the deploy directory)
```

### 3. On Heroku

After local deploy build is built

```bash
npm run deploy
```

