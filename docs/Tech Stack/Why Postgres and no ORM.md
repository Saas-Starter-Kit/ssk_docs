---
sidebar_position: 6
---

Postgres and the pg library are the most popular relational database and relational database library for nodejs by far. The pg library has more downloads than both the mysql and mysql2 libraries combined.

This larger community means more library contributions and more battle testing to find and fix bugs.

##### Why no ORM or query builder?

Both Knex and Sequelize, which are popular query builders and ORMs for nodejs, have similar levels of popularity as mysql but still far less than pg.

SQL is a mature technology that has been around for decades. It is not likely to introduce breaking changes any time soon. This is not the case with query builders which are relatively new and get updated often.

https://www.npmtrends.com/pg-vs-sequelize-vs-knex

There are many people and articles online that are actively discouraging people from using ORMs and query builders. This is not true of writing SQL queries where it is difficult to find even one article that discourages its use.

There are no security issues to writing queries this way. The input is sanitized.

https://github.com/brianc/node-postgres/wiki/FAQ

References:

https://gajus.medium.com/stop-using-knex-js-and-earn-30-bf410349856c
