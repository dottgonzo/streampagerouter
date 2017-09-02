"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var express = require("express");
var app = express();
app.use('/', index_1.router());
app.listen(process.env.PORT || 3001);
