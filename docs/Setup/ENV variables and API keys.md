---
sidebar_position: 2
---

This project uses the dotenv library and a .env file to define global variables for the client, server and infrastructure.

https://www.npmjs.com/package/dotenv

This is a very popular library and is a very practical and secure way to define global variables.

#### Global Variables with .env

The env file is used usually to define sensitive credentials like API keys that should not be committed to source.

However it can be used to define any variable that should be global for practical purposes.

For example the subscription plan prices are defined as env variables even though they are simple integers. This is because it is very practical to do this. Without setting a global variable for price it would need to be updated every place it is defined in the code if a price change were to occur. This is not easy and could lead to errors and mismatched prices.

So for this reason any sensitive information and practical global variables should be defined in the .env file.

Defining env variables on the frontend requires that they be prefixed with NEXT*PUBLIC*. The nodejs server does not have any such requirements.

An .env.example file is given for the required env variables. Simply fill out these variables and rename the file to .env.

#### Production API keys

It is general practice to separate Development and Production API keys. You should generally not define your live site production API keys in the .env file as this is generally not secure since they will be shared by many people during development.

It is best to keep the most sensitive keys in a secret manager. The AWS infrastructure deployment comes with a built in AWS Secrets Manager. The database password and stripe secret are very sensitive keys and should be kept in the secrets manager. Less sensitive keys can be kept as normal env variables as storing all env variables in the secrets manager is not cost effective and unnecessary.
