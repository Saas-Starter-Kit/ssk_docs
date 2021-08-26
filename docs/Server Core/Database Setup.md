---
sidebar_position: 2
---

This project supports the option of using both postgres and mongodb. This project seamlessly integrates with either. Simply change the import statements in the Services directory to use either one.

Example

To use Postgres:
`import { postTodoModel } from ‘../../Model/sql/todos/todos.js’`

To use MongoDB:
`import { postTodoModel } from ‘../../Model/mongo/todos/todos.js’`

This can be done because all database queries (both postgres and mongodb) are extracted out to the Models directory. They also have the same function names and return the same data. Meaning switching from postgres to mongodb is as easy as changing the import statements, no other configuration is required.

It is also possible to use both databases at the same time.

It is recommended to remove the code of the database you are not using.

See the specific sections on Postgres or Mongodb for more details.
