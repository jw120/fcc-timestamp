# FreeCodeCamp Timestamp Microservice exercise

Very simple Express REST server implemented with TypeScript.

Testing with Mocha, Chai/Expect and Fetch. Tests of the server can take a `SERVER` environment variable to allow testing of
running servers (localor remote), e.g.,

```bash
SERVER=https://ancient-cliffs-38727.herokuapp.com npm run test
```

Git is used as the tool to sync to Heroku, but this is kept seperate from our
source git repo (in the deploy sub-directory). This means all heroku commands need to be
run within the deploy sub-directory (which is done automatically via the npm run commands)

Note that the challenge does not given any specification for the format of a natural date that we are supposed to accept, so we just use
whatever the standard javascript Date constructor provides.

## TODO

* DONE Git checkin
* DONE Add tests
* DOME Get Heroku working again
* DONE Trim node_modules and typings
* DONE watch video
* TODO ? Remove return value from server.ts?
* TODO Check date format output
* TODO ally served
* Decide on static file to serve
* Add test for static file
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

