var express = require('express');

var app = express.createServer(express.logger());

var file = 'index.html';
var buffer = fs.readFile(file);
var output = buf.toString(buffer);

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
