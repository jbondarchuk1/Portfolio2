# NestJS Back End

Run standalone with the following

```bash
$ npm init
$ npm start
```

Test the project using Jest with the following

```bash
$ npm init
$ npm test
```

## Node JS with dependency injection

The API in NestJS is simple here. We have the following routes.

### GET /

‘hello world’

### GET /projects

async return json array of project objects

each object has the following properties: 

- headling
- language
- description
- repoLink
- optional projectLink

### POST /

sends email with GMail SMTP API

input json object for email with properties:

- name
- emailAddress
- subject
- optional body



## Jest Testing

The test suites are not for full code coverage, but rather proof of concept. They test the app controller and database initialization. Tests are included in each folder with the ‘.spec.ts’ file extension/ending.

## SQLite Database

The database should be in the NestJS project’s root directory as portfolio.db. SQLite3 is our database dependency and I am not using an ORM.

The database is seeded with hard coded data, then asynchronous queries are used for the API endpoint.