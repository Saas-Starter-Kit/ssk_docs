---
sidebar_position: 4
---

This project comes configured with postgres by default, but can be seamlessly changed to mongodb with the same exact functionality.

This is because all database queries (both postgres and mongodb) are extracted out to the Models directory. They also have the same function names and return the same data. Meaning switching from postgres to mongodb is as easy as changing the import statements.

It is also possible to use both Mongodb and Postgres at the same time. If not using Postgres, the Postgres directory in both the Models and Database directory can be removed.

Mongoose is a popular ODM for mongoDB and is used in this project. Mongoose makes working with MongoDB much easier and gives the NoSQL database some relational database-like features.

Robo3t is also a good GUI for working with mongoDB in local development

https://robomongo.org/

MongoDB
https://docs.mongodb.com/manual/installation/

Mongoose
https://mongoosejs.com/docs/
