# Serverless Framework Bootcamp: Node.js, AWS & Microservices

[Udemy](https://www.udemy.com/course/serverless-framework)

## Prerequisites

1. [Node.js](https://nodejs.org) / [nvm](https://github.com/nvm-sh/nvm)
1. [AWS Cli](https://aws.amazon.com/pt/cli/) (lattest version)
1. [Serverless standalone binary](https://www.serverless.com/framework/docs/getting-started/) (npm installation preferred)

## Infrastructure

### AWS Cli

- Create a IAM user with programatic access
- Configure AWS Cli with the public and secret keys (awc configure)

### Deploy

Order:

- auth-service
- notification-service
- auction-service

#### Auth Service

- Create a secret.pem file using the OAuth certificate.

```
$ cd auth-service
$ sls deploy -v --stage dev
```

#### Auction Service

Deploy the entire stack

```
$ sls deploy --stage prod -v
```

Deploy a specifc function

```
$ sls deploy -f hello -v
```

### Remove

```
$ sls remove --stage dev -v
```

### Invoke a Lambda

```
$ sls invoke -f processAuctions -l
```

## Others

- https://medium.com/@oieduardorabelo/serverless-framework-as-10-melhores-pr%C3%A1ticas-recomendadas-e2ec59f92699
- https://www.serverless.com/blog/cors-api-gateway-survival-guide
