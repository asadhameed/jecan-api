# Project Description

Back-end API for Jecan

<strong> The User Registration and Authentication API</strong> <br>
User registration/SingUp have some constraints e.g. valid Email, Password has min 6 and max 20 characters.

- post('/user/login');
- post('/user/registration');
- get('/user/:id');

## Environment Variables

First, create a .env file in the project directory. Gives your own value for the fellowing variables

- MONGO_DB_CONNECTION="mongodb://localhost/your_database"
- JWT_PRIVATE_KEY="Define_your_key"

Open the .env.test file in the project directory and change the MONGO_DB_CONNECTION variable

- MONGO_DB_CONNECTION="mongodb://localhost/your_test_database"

## Available Scripts

In the project directory, you can run:

### `npm i`

This command will install all the dependency packages in the node_modules directory.

### `npm run dev`

Runs the app in the development mode with nodemon.<br />
Call the API with [http://localhost:8000](http://localhost:8000).

### `npm start`

Runs the app in the production mode.<br />
Call the API with [http://localhost:8000](http://localhost:8000).

### `npm test`

Runs the test and shows the test result. The result shows how many Test suites, how many tests are passed and how many tests are failed.<br />

## The code deploy on firebase hosting.

Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.\

1. Step 1: Install the Firebase CLI. Run from npm `npm install -g firebase-tools`
   1. Log in and test the Firebase CLI `firebase login`
2. Step 2: Initialize your project

   1. create a new project in [firebase](https://console.firebase.google.com/)
   2. Open the project directory "jecan-api" and run `firebase init hosting`
   3. select an existing project (choose your project)
   4. what do you want to use as your public directory (public) public is by default
   5. Configure as as single-page-app (rewrite all urls to /index.html)? (y/N) -----> choose y
   6. Set up automatic builds and deploys with gitHub?(y/n)-- n
   7. File build/index.html already exists. Overwrite? (y/n) ------> choose n

3. Step 3: firebase init functions (to install npm and package)
   1. cd functions (open functions folder inside in project)
