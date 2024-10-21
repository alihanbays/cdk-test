"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFirstCdkStack = void 0;
const cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs'; Amazon Simple Queue Service
const lambda = require("aws-cdk-lib/aws-lambda");
class MyFirstCdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new lambda.Function(this, 'lambdaFunction', {
            functionName: 'first-cdk-lambda',
            code: new lambda.AssetCode('src'),
            handler: 'index.handler',
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 128
        });
    }
}
exports.MyFirstCdkStack = MyFirstCdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZmlyc3QtY2RrLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZmlyc3QtY2RrLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQywwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM1QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUMsWUFBWSxFQUFFLGtCQUFrQjtZQUNoQyxJQUFJLEVBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNsQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQVpELDBDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnOyBBbWF6b24gU2ltcGxlIFF1ZXVlIFNlcnZpY2VcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJ1xuXG5leHBvcnQgY2xhc3MgTXlGaXJzdENka1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnbGFtYmRhRnVuY3Rpb24nLCB7XG4gICAgICBmdW5jdGlvbk5hbWU6ICdmaXJzdC1jZGstbGFtYmRhJyxcbiAgICAgIGNvZGUgOiBuZXcgbGFtYmRhLkFzc2V0Q29kZSgnc3JjJyksXG4gICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcbiAgICAgIG1lbW9yeVNpemU6IDEyOFxuICAgIH0pXG4gIH1cbn1cbiJdfQ==