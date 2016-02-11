var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    
  res.header('X-Node-App-Request-IP', ip);
  res.json({ message: 'hello world' });  
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
