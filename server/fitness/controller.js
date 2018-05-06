var express = require('express');
var Fitness = require('./model');

var app = express.Router();

var fitness = new Fitness();

module.exports = app
    .get('/news', (req, res) => res.send(fitness.nextNews()))
    .get('/activities', (req, res) => res.send(fitness.getActivities(req.query.userId, req.query.name)))
    .get('/state', (req, res) => res.send(fitness))
    .post('/activities', (req, res) => {
        try {
            fitness.modifyActivity(req.body.UserId, req.body.Activity, req.body.Action);
            res.send({ success: true });
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    });