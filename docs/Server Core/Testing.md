---
sidebar_position: 9
---

This Project comes with a robust and modern testing suite with Jest.

Testing on the server side is different from the frontend where api calls are generally mocked.

On the server this is usually not the case when making api calls to the database. API calls to third party libraries like Stripe are sometimes mocked but calls to the database are not.

For this reason a test database will need to be set up to work with the tests. It is possible to just use the dev database but this is not recommended as the data in the dev database may interact with the tests and may cause them to unintentionally pass or fail.

It is industry best practice to use a separate test database.

As previously mentioned, third party api calls can be mocked. A detailed example of how to mock third party libraries is given in the Stripe tests.

When testing, it might be helpful to wrap the code in try catch blocks. This will give you detailed error messages for why tests fail. Due to keeping clean code, try catch blocks are not used by default.
