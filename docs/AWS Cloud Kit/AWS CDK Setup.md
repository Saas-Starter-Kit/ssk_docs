---
sidebarposition: 2
---

Using AWS CDK Requires setup of the AWS CLI.

#### Installing aws-cdk.

npm install -g aws-cdk
https://aws.amazon.com/cdk/

#### Creating a IAM user.

Make sure to have an IAM with Admin priviledges configured with AWS CLI
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html

#### Using AWS CDK

Then run cdk synth to synthesize the configuration into a cloudformation template.
Then cdk deploy To deploy the entire infrastructure to your AWS account.
IMPORTANT
Make sure to run cdk destroy when finished otherwise you will be charged by AWS for using their services
https://docs.aws.amazon.com/cdk/latest/guide/cli.html

#### Disclaimer

AWS CDK is an advanced tool that requires expert AWS knowledge. It is not recommended to modify the code without the prerequisite knowledge, even though it is written in typescript which most web developers are familiar with. Improper modifications can lead to exposing huge security holes, accidently creating expensive AWS resources, or breaking the infrastructure. An associate level AWS certification or higher is a good baseline to have for working effectively with this tool.
