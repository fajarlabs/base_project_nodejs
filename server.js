'use strict'
const loadIniFile = require('read-ini-file')
const path = require('path')
const express = require('express');
const request = require('request');

const fixture = path.join(__dirname, 'config.ini')
const config = loadIniFile.sync(fixture)
const dateTime = require('node-datetime');

const app = express();
const expressWs = require('express-ws')(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/test', function(req, res) {
  res.json({"data": "OK"})
});

app.ws('/echoQR', function(ws, req) {
});

app.listen(config.SERVER.port);
console.log('Server started at http://localhost:' + config.SERVER.port);