var express = require("express");
var http = require('http');
var app = express();

app.use(express.static(__dirname+'/public'));

var server = app.listen(process.env.PORT, function(){

    var host = server.address().address
    var port = server.address().port

    console.log('Test node iis listening at http://%s:%s', host, port)
})