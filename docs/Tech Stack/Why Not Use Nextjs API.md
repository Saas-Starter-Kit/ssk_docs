---
sidebar_position: 3
---

If you are not aware, nextjs has a built in API functionality that allows you to define api endpoints right alongside your nextjs code in an API directory. The endpoints are serverless functions.

This boilerplate does not use this functionality.

There are a few reasons for this.

##### Technical and Cognitive Complexity

The first reason being that serverless functions are easy to work with for simple apps but become unnecessarily and overly complex as your app grows. Complexity referring to both the technical complexity of serverless functions and also the cognitive complexity that you and your developers will experience trying to manage a lot of disparate serverless functions.

##### Lack of ecosystem

Serverless is still quite immature compared to standard servers, the ecosystem is nowhere near regular servers. You will find a lack of tutorials, guides and third party libraries compared to servers.

##### Tightly coupled to Provider

The serverless functions are very tightly coupled with providers such as AWS Lambda or Google Cloud Functions which greatly limits your infrastructure architecture.

##### Development and developers

Development with serverless is more difficult. Serverless function development is not the same as standard server development. Generally, serverless functions need to be built which takes time and the developer cant do anything during this time.

Serverless functions are also more difficult to debug.

Not many developers are familiar with serverless which will make it hard to find developers to work on your app.

Modern architectures utilize a decoupled approach where the client and server can be developed and run independently which makes things more organized and robust.

The AWS infrastructure this project uses also uses AWS Fargate which is a serverless container service. This gives all the benefits of serverless while still allowing for a traditional server dev experience.

This boilerplate also comes with a AWS Lambda template in case you did want to utilize serverless functions.

However it is not a binary choice you can always add nextjs API routes if necessary, if the above mentioned limitations are not a problem for you.

Further Reading:

https://www.serverless.com/blog/when-why-not-use-serverless

https://www.serverless.com/blog/serverless-faas-vs-containers
