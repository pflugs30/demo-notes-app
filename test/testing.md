# Outputs
``` YAML
Stack dev-notes-storage
  Status: no changes
  Outputs:
    BucketArn: arn:aws:s3:::dev-notes-storage-uploadsbucketc4b27cc7-wy7tybnlraxe
    BucketName: dev-notes-storage-uploadsbucketc4b27cc7-wy7tybnlraxe

Stack dev-notes-api
  Status: no changes
  Outputs:
    ApiEndpoint: https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com

Stack dev-notes-auth
  Status: no changes
  Outputs:
    IdentityPoolId: us-east-1:0d702300-2039-47c8-bff7-7dbe80e549ea
    Region: us-east-1
    UserPoolClientId: 6i48as6hh6hj10j0ujhv3qsebm
    UserPoolId: us-east-1_PkClGNAjO

Stack dev-notes-frontend
  Status: deployed
  Outputs:
    SiteUrl: https://d2e9va7xq2ndjr.cloudfront.net
  ReactSite:
    REACT_APP_API_URL: https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com
    REACT_APP_BUCKET: dev-notes-storage-uploadsbucketc4b27cc7-wy7tybnlraxe
    REACT_APP_IDENTITY_POOL_ID: us-east-1:0d702300-2039-47c8-bff7-7dbe80e549ea
    REACT_APP_REGION: us-east-1
    REACT_APP_USER_POOL_CLIENT_ID: 6i48as6hh6hj10j0ujhv3qsebm
    REACT_APP_USER_POOL_ID: us-east-1_PkClGNAjO
```

# Testing
## Create
### Request
``` bash
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{"content":"Hello World","attachment":"hello.jpg"}' \
    https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com/notes
```

### Response
``` JSON
{
    "userId":"123",
    "noteId":"d61bbf00-adf8-11ec-82ed-5fe7b6b51a16",
    "content":"Hello World",
    "attachment":"hello.jpg",
    "createdAt":1648404479728
}
```

## Get
### Request
``` bash
curl https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com/notes/d61bbf00-adf8-11ec-82ed-5fe7b6b51a16
```

### Response
``` JSON
{
    "attachment":"hello.jpg",
    "content":"Hello World",
    "createdAt":1648404479728,
    "noteId":"d61bbf00-adf8-11ec-82ed-5fe7b6b51a16",
    "userId":"123"
}
```

## List
### Request
``` bash
curl https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com/notes
```

### Response
``` JSON
[
  {
    "attachment": "hello.jpg",
    "content": "Hello World",
    "createdAt": 1648404479728,
    "noteId": "d61bbf00-adf8-11ec-82ed-5fe7b6b51a16",
    "userId": "123"
  }
]
```

## Update
### Request
``` bash
curl -X PUT \
    -H 'Content-Type: application/json' \
    -d '{"content":"New World","attachment":"new.jpg"}' \
    https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com/notes/d61bbf00-adf8-11ec-82ed-5fe7b6b51a16
```

### Response
``` JSON
{
    "status":true
}
```

## Delete
### Request
``` bash
curl -X DELETE https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com/notes/d61bbf00-adf8-11ec-82ed-5fe7b6b51a16
```

### Response
``` JSON
{
    "status":true
}
```

## Create User
### Request
Note: these test commands are designed to be run on Windows only.
``` cmd
aws cognito-idp sign-up ^
  --region us-east-1 ^
  --client-id 6i48as6hh6hj10j0ujhv3qsebm ^
  --username admin@example.com ^
  --password Passw0rd!

aws cognito-idp admin-confirm-sign-up ^
  --region us-east-1 ^
  --user-pool-id us-east-1_PkClGNAjO ^
  --username admin@example.com

npx aws-api-gateway-cli-test ^
    --username admin@example.com ^
    --password Passw0rd! ^
    --user-pool-id us-east-1_PkClGNAjO ^
    --app-client-id 6i48as6hh6hj10j0ujhv3qsebm ^
    --cognito-region us-east-1 ^
    --identity-pool-id us-east-1:0d702300-2039-47c8-bff7-7dbe80e549ea ^
    --invoke-url https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com ^
    --api-gateway-region us-east-1 ^
    --path-template /notes ^
    --method POST ^
    --body "{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}"
```

### Response
``` text
{
    "UserConfirmed": false,
    "CodeDeliveryDetails": {
        "Destination": "a***@e***",
        "DeliveryMedium": "EMAIL",
        "AttributeName": "email"
    },
    "UserSub": "b035b504-35a7-403d-b947-e2bf7b2a19f8"
}
Authenticating with User Pool
Getting temporary credentials
Making API request
{
  status: 200,
  statusText: 'OK',
  data: {
    userId: 'us-east-1:d9e9adca-dda3-4d55-b28f-02fd2ea65a06',
    noteId: 'ef2ff600-ae2a-11ec-80dd-e54135ffcc88',
    content: 'hello world',
    attachment: 'hello.jpg',
    createdAt: 1648425996640
  }
}
```

## Billing
### Request
Note: these test commands are designed to be run on Windows only.

``` cmd
npx aws-api-gateway-cli-test ^
    --username admin@example.com ^
    --password Passw0rd! ^
    --user-pool-id us-east-1_PkClGNAjO ^
    --app-client-id 6i48as6hh6hj10j0ujhv3qsebm ^
    --cognito-region us-east-1 ^
    --identity-pool-id us-east-1:0d702300-2039-47c8-bff7-7dbe80e549ea ^
    --invoke-url https://xi4hzb7mz1.execute-api.us-east-1.amazonaws.com ^
    --api-gateway-region us-east-1 ^
    --path-template /billing ^
    --method POST ^
    --body "{\"source\":\"tok_visa\",\"storage\":21}"
```

### Response
``` text
Authenticating with User Pool
Getting temporary credentials
Making API request
{ status: 200, statusText: 'OK', data: { status: true } }
```
