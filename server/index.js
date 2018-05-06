const express = require('express');
const bodyParser = require('body-parser');

const fitness = require('./fitness/controller')

var app = express();

const servername = "localhost";
const port = 8080;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    })
    .use('/home', fitness)
    .use('/', (req, res, next) => {
        res.write("Server is working fine!.");
        res.end();
    }).listen(port);

console.log("Running on http://" + servername + ":" + port);