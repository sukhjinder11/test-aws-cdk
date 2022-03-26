import { 
    Stack,
    StackProps,
    aws_lambda as lambda,
    Tags
  } from 'aws-cdk-lib';
  
import { Construct } from 'constructs';

export interface tagdef {
  Key: string,
  Value: string
}

interface tagdefs extends Array<tagdef>{}

export interface LambdaProps {
  readonly stackName: string;
  readonly mytags: tagdefs;
}


export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props: LambdaProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'HelloHandler', {
      functionName: 'my-hello-lambda',
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.hello_handler',
      runtime: lambda.Runtime.PYTHON_3_8
    });

    const my_tags = props.mytags

    for(var item in my_tags){
      Tags.of(handler).add(my_tags[item]['Key'], my_tags[item]['Value']);
    }

  }

}
