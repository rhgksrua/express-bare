var express = require('express');
var app = express();

var port = process.argv[2] || 3000;

app.get('/', function(req, res) {
    res.send('hello world');
});


app.listen(port);
console.log('http://localhost:' + port);
