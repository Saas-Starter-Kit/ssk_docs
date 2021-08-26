---
sidebar_position: 2
---

AWS Fargate is a newer service by AWS that has been exploding in popularity. It is a serverless container service, and the serverless version of AWS ECS.

Pairing this with images for web servers is very powerful. This gives all the benefits of serverless while still allowing for a traditional web server development experience.

This project uses a nodejs api server with Docker images. The AWS Fargate configuration in this project is written as code with AWS CDK and already preconfigured. AWS CDK allows deploying the pre configured AWS Fargate architecture with 2 easy CLI commands. No AWS experience or setup is required.

This setup allows you to develop and code your nodejs server as normal and get all the benefits of serverless compared to serverless functions. Since AWS Fargate is persistent, this means the performance and reliability is better than serverless functions as well.

This server development and production setup is far superior to the technical and cognitive complexity of using disparate AWS Lambda functions. However if Lambda functions are desired, Lambda templates with AWS CDK are also included for your convenience.
