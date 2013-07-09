var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var file = 'index.html';
var buf = new Buffer(128);
buf = fs.readFile(file);
var output = buf.toString();

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
