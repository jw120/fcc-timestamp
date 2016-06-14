# FreeCodeCamp Timestamp Microservice exercise

Very simple Express REST server implemented with TypeScript.

Note - uses git as an rsync not source control

## TODO

* DONE Git checkin
* DONE Add tests
* Check date format output
* Add / page

* Add testing of server
* Avoid lint errors in VS Code for duplicate // keys in package.json

* Get to work on Heroku
* Check heroku local to work in sub-tree

## Ways to run

* From local src dir (best for testing during development)

npm run compile (if not compiled by VS Code's Build)
npm run src-start (which does node src/server.js)

* From local deploy dir (to test before upload):

npm run compile
npm run build
npm run local-install (which does npm install in the deploy directory)
npm run local-start (which does heroku local...)

* Onto Heroku (after local deploy build is built)

npm run deploy

