"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");
var fs = require("fs");
function router() {
    var router = express.Router();
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use('/bower', express.static('bower_components'));
    router.get('/stream', function (req, res) {
        fs.readFile(__dirname + '/views/streaming.html', 'utf8', function (err, data) {
            if (err) {
                res.send('error');
            }
            else {
                var compiled = _.template(data);
                res.send(compiled({
                    title: req.query.title || 'player',
                    piwik_id: process.env.PIWIK_ID || false
                }));
            }
        });
    });
    return router;
}
exports.router = router;
