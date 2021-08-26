---
sidebar_position: 7
---

Creating a new Lambda function is very straight forward.

The first thing you will need to do is define it in the Functions directory, or another directory.

Third party libraries will need to be installed if your function uses them.

Next the Lambda will need to be built with NodejsFunction(). Simply follow the provided template on how to do this.

```
    const createOne = new NodejsFunction(this, 'createItemFunction', {
      entry: 'Functions/create/create.js',
      handler: 'handler',
      environment: {
        TABLE_NAME: dynamoTable.tableName
      }
    });
```

Finally there will need to be an endpoint to trigger the Lambda. A template is also provided for this. Simply follow the given boilerplate for the other functions.

```
    const items = api.root.addResource('items');
    const getAllIntegration = new LambdaIntegration(getAllLambda);
    items.addMethod('GET', getAllIntegration);

    const createOneIntegration = new LambdaIntegration(createOne);
    items.addMethod('POST', createOneIntegration);
```

All in all, a new Lambda function will only take 5-10 lines of code to be configured with AWS CDK. This is a massive improvement over previous generations of technologies like Cloudformation that would have required dozens or even 100s of line of code for the same configuration and setup.

https://aws.amazon.com/lambda/
