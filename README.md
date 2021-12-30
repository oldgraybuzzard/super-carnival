# Budget Tracing Web Application

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  
## Description
This Budget Tracker application allows users to add expenses and deposits to their budget with or without a connection.  Regardless of the users online connection, they will be able to use this app. The user will be able to track their budget in real time. If the user has an online connection, the application will constantly update the database as well as the UI. Additional functionality of this app is the ability to use this while offline. If no connection is available the user will still be able to track their expenses and see the visual graph, and the app will utilize the cache as well as the indexed database to store all transactions and as soon as the device comes online again it will then populate the database with those "pending" transactions. This app is able to be installed as a standalone app on a users desktop or laptop computer as well as mobile devices. This application uses IndexDB, Service workers, and Web Manifest for offline functionality and is deployed on Heroku. 

## Table of Contents
* [Dependenciess](#dependencies)
* [Links](#links)
* [Usage](#usage)
* [Contributors](#contributors)
* [Features](#features)
* [Tests](#tests)


## Dependencies 💻
To install dependencies, run these commands:
```
Node.JS, NPM, express, mongoose, morgan, compression, web app manifest, indexed db
```

## Links
* [Heroku Deployment](https://stormy-bayou-15795.herokuapp.com/)
* [Github Link](https://github.com/oldgraybuzzard/super-carnival.git)

## Usage 🏆
### Screenshots:
* [Homepage](./readme_assets/homepage.png)
* [Offline Transaction](./readme_assets/offline_transaction.png)
* [Offline Upload](./readme_assets/offline_upload.png)
* [Manifest](./readme_assets/manifest.png)
* [Service Worker](./readme_assets/service_worker.png)


## Contributors 😃
[oldgraybuzzard](https://github.com/oldgraybuzzard)
* Contact me at k_felder@me.com

## Features
None 

## Tests 🧪
To test the offline functionality, while in the applicaiton use the Developer Tools feature of your browser and use option to disconnect the browser from the network connection. Enter the data as desired. Reset the network connection to online and validate that you receive a message indicating that the offline data has been uploaded.
