var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
var fs = require("fs");

app.get('/', function(req, res, next) { res.send('<a href="/control.html">Control</a><br><a href="/world.html">World</a>'); });
app.use('/',express.static('app'));
app.use('/res', express.static('res'));

var server = app.listen(9000);

var options = {
    debug: true
}

app.use('/api', ExpressPeerServer(server, options));

// OR

var server = require('http').createServer(app);

app.use('/peerjs', ExpressPeerServer(server, options));

server.listen(8120);
