var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    
  res.header('X-Node-App-Request-IP', ip);
  res.json({ message: 'hello world' });  
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
