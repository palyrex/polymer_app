var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// set folders to use in html
app.use('/components',  express.static(__dirname + '/components'))
app.use('/elements',  express.static(__dirname + '/elements'))
app.use('/post-service',  express.static(__dirname + '/post-service'))
app.use('/api',  express.static(__dirname + '/api'))
app.use('/views',  express.static(__dirname + '/views'))
app.use('/finished',  express.static(__dirname + '/finished'))

// handle main page
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
