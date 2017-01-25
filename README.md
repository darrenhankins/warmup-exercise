# warmup-exercise
`Galvanize/Exercises/warmup-exercise`

Create database, migrations and seed with knex

```terminal
$ createdb db-name
$ mkdir dir-name
$ npm init -y
$ yarn add knex pg
$ knex init
$ yarn add bcrypt
$ knex migrate:make migration-name
$ knex seed:make 01-seed-name

```
knexfile.js

```js
// require("dotenv").load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://localhost/database-name'
  }
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + '?ssl=true'
  // }
};
```

Bcrypt password in seed file

```js
var bcrypt = require('bcryptjs');

password: bcrypt.hash('password54321', 8)


```
