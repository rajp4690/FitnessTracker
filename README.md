# FitnessTracker


[![npm](https://img.shields.io/badge/npm-5.0.6-blue.svg)](https://www.npmjs.com/)
[![npm](https://img.shields.io/badge/node-v8.9.4-brightgreen.svg)](https://nodejs.org/en/)
[![npm](https://img.shields.io/npm/l/@angular/cli.svg)](https://opensource.org/licenses/MIT)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.7.3.

## Features
- Server side user registration and login.
- Login using `Google OAuth` is also available.
- User can `Add` and `Remove` activities as well as mark them as `Completed`.
- User can keep the track of progress using dynamic progress bar and percentage completed.
- Color Card style User-Interface.
- All users as well as each user's data are stored on server.
- Multi-User support with seprate profile for each user.
- User can share their own activities as well as see the current and completed activities of other users.
- Latest US health news from the [NewsApi.org](https://newsapi.org) API on a home page.
- User can see the next news or can visit the full article using the provided buttons.

## Login

![Login](https://raw.githubusercontent.com/rajp4690/FitnessTracker/master/screenshots/Login.jpg)

## Home

![Home](https://raw.githubusercontent.com/rajp4690/FitnessTracker/master/screenshots/Home.jpg)

## Activity

![Activity](https://raw.githubusercontent.com/rajp4690/FitnessTracker/master/screenshots/Activity.jpg)

## Installing Dependencies
Run `npm install` from project directory to install all required dependencies for this project.

## Backend 
Run `npm run server` for a dev server. Navigate to `http://localhost:8080/`. The server will automatically reload if you change any of the source files.

## Frontend
Run `ng serve` for a client-side dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
