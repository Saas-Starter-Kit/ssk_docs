---
sidebarposition: 4
---

You can release changes in pipelines to trigger a new deploy

Code is automatically pulled to the pipeline whenever you make a push to master. Do not move or modify buildspec.yml as this is used for the code build environment. Customized commands can be added to this file.

If using your own domain name it is necessary to set up a certificate first. Doing this with AWS ACM is recommended as it has tight integration with the rest of the stack. See the AWS Certificate section for more details.

All the Nextjs ENV vars need to be set in the CI/CD env file to make them available in the aws Codebuild environment.

#### Allowing access to AWS from github

The first thing you will need to do is allow AWS to pull code from your Github repo. This can be done with a Github token. The next steps are provided below. Additional resources are included if need further clarification.

1. Generate Github Access token
2. Set the Token in AWS secrets manager console
3. Get the ARN
4. Add the secrets ARN to the env file in the CI/CD infrastructure directory

Creating github token:
https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

Creating AWS Secrets Manager item:
https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html
