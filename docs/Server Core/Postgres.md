---
sidebar_position: 3
---

Postgres is the most popular database for nodejs, even more so than mongoose/mongodb and mysql, having slightly more weekly downloads than both of them combined.

https://www.npmtrends.com/pg-vs-mongoose-vs-mysql

Postgres comes with this project by default but can be easily switched to mongoDB. Postgres setup is required for this boilerplate to work.

#### Postgres Setup:

Install Postgres:
https://www.postgresql.org/download/

Be sure to memorize your credentials such as database name, user and password.

Then Substitute them in the .env file.

Add vscode postgres extension to add a GUI to the local postgres database.

psql shell and pg admin are also good postgres clients.

#### What if you are using another RDBMS?

Usually the DML (data manipulation language, such as select and update statements) is exactly the same between different flavors and only the DDL (data definition language, such as create database commands) are different.

This means modifying the queries from one RDBMS to another should not be a problem at all.

This project aims to be very optimized for Postgres, since it’s the most popular RDBMS and not somewhat good with every RDBMS.

Also, as a startup are you really going to be using Oracle Database?
