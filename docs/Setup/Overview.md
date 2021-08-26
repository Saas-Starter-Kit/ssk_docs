---
sidebar_position: 1
---

The following setups in this section are required

There are additional optional setups such AWS and the Prismic CMS that are in their own section.

#### Node Version

nodejs 14+ and npm 7+ is required to use this boilerplate.

After installing the modules the boilerplate needs both the client and server to run independently in 2 different terminal windows.

The boilerplate requires all the given env variables in .env.example in both client and server to run.

The client can be started with `npm run dev` and the client with `npm start`.

#### Replacing services

If you dont want to use Sentry, it can be removed by removing in config file in the nodejs server

Using sendinblue is also optional. Another Email service provider is required for transactional emails however.

#### Semi-optional setups

Postgres - Optional only if using mongodb

MongoDb - Optional only if using Postgres

SendinBlue - Optional only if using another Email service Provider. The email configuration has to be setup regardless of which ESP you are using.

#### Fully optional setups

Mailtrap: Good to use if you dont want to send emails during development. Another similar service like ethereal email can be used.

machine learning: Completely optional only included in the boilerplate for demonstration purposes.
