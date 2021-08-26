---
sidebar_position: 3
---

This project was built with great attention to security. An explanation of how security is handled in every aspect of the project is given below.

\*Note for optimal security, always keep your npm packages as up to date as possible.

#### Client

Security is implemented on the frontend with Authentication and permissions. Authentication is used to protect routes that should only be accessible by users that are logged in. More fine grained control is offered by permissions.

Permissions can be used to restrict routes or even certain JSX elements based on whether the user is an admin or non-admin. Permissions can also be based on whether the user is a paid user or not.

See permissions section for more details.

#### Server

Similar to the client, server security also includes permissions and authentication. Permissions and authentication can be used to restrict access to API requests.

See authentication and permissions section for more details.

The use of Firebase also allows us to completely offload responsibility for handling user passwords.

See Why Firebase? Section for more details.

Database queries are also automatically sanitized by the node js pg library.

https://node-postgres.com/features/queries

For further protection from bots and fraud signups, email confirmation is implemented during authentication signup.

#### Infrastructure

The AWS infrastructure is also very secure. The database is deployed in a private VPC, which makes it inaccessible from the internet and thus makes it virtually impervious to attacks.

This is in contrast to the Heroku Postgres addon and most other hosted databases which are completely public and vulnerable to attacks. Having a public database is universally agreed to be bad security practice.

Very sensitive information such as the database password and stripe security key are stored in AWS Secrets Manager.
