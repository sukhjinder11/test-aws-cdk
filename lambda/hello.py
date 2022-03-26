import json

def hello_handler(event, context):
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/plain'
        },
        'body': "Hello Aman !!!"
    }