# rfid-selfdefense-lambda -> Serverless Express js Web APp

Installation Guide :

- npm install -g serverless
- serverless login (Create Account with App name)
- Create IAM User and store access and secret key (Tutorial: https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44)
- sls create --template  hello-world (That will create a serverless project from scratch!)
- npm init (Generate a package.json file)

- Install dependencies: 
  //install express - a simple web framework
  npm i --save express
  //install the body-parser middleware
  npm i --save body-parser
  //install view engine for express
  npm i --save  hbs
  //you'll need serverless-http to connect your api to aws
  npm i --save serverless-http
 

For Deployment: 

  sls deploy

