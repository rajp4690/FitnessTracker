const express = require('express');

const fitness = require('./fitness/controller')

var app = express();

const servername = "localhost";
const port = 8080;

app
    .use('/home', fitness)
    .use('/', (req, res, next) => {
        res.write("Server is working fine!.");
        res.end();
    }).listen(port);

console.log("Running on http://" + servername + ":" + port);