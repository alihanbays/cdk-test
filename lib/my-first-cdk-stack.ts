import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs'; Amazon Simple Queue Service
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class MyFirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'lambdaFunction', {
      functionName: 'first-cdk-lambda',
      code : new lambda.AssetCode('src'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 128
    })
  }
}
