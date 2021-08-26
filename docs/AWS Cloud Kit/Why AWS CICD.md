---
sidebar_position: 3
---

AWS is currently the best CICD tool on the market. There are no wait queues, unlimited collaborators and beefy AWS build cpus. Everything from build to test to deploy is on AWS, no need to mess around with complex third party integrations.

AWS CICD pipelines have the fastest builds, most customization and the cheapest price. We can for example compare with Netlify which is the most popular CI/CD alternative to AWS CodePipeline.

#### Price Comparisons

Let’s look at a setup with 5 team members, 5 concurrent builds, 1000 GB of Bandwidth and 2000 build minutes.

This setup on Netlify will cost $314/month.

Vercel is another popular CI/CD provider. This setup is not even available on their regular plans. It will push you to an enterprise plan with a 4-figure per month price according to a Vercel rep.

On AWS this same setup will be $90/month.

There will still be wait queues for builds and less powerful build cpus in Netlify and Vercel and their infrastructure is nowhere near AWS quality.

It’s simply no contest, AWS is both the highest quality and the cheapest.

The AWS CodePipeline infrastructure in this project comes written as code and is fully setup and ready to deploy to your AWS account with 2 easy CLI commands.
