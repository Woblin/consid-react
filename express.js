//Statisk express server i node.js

var express = require('express');
var app = express();

app.use(express.static('dist'));

app.use('/', express.static(__dirname + '/dist/index.html'));
/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/
app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
