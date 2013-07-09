var express = require('express');
var fs = require('fs');
var file = 'index.html';

fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
