var express = require("express");
var http = require('http');
var app = express();

app.use(express.static(__dirname+'/public'));

// change to process.env.PORT from 3000

var server = app.listen(3000, function(){

    var host = server.address().address
    var port = server.address().port

    console.log('Test node iis listening at http://%s:%s', host, port)
})