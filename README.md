# Project process description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Which means everything was essentially built from scratch! No templates used

## Available Scripts

In the project directory, you should run:

## `npm install`

Installs all the dependencies of the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Project functionality

## Authentication
Users can login/signup using either email/password or their Google credentials. This authentication is actually real, it uses Firebase as the authentication service

## Data and Backend
Users can add/list/edit books through the UI. The information ends up in the Firestore Database, and the uploaded images in the Firebase Storage bucket. Meaning the backend has been implemented through Firebase. This is great for prototyping, but obviously in a real project this would need to be reworked developing a custom backend and choosing the cloud provider that would best serve the needs

## Testing
Unfortunately there was no time to develop testing either

## Deploy
The project was also not deployed in the cloud, and needs to be run locally. However, since the backend is Firebase, only the frontend needs to run
