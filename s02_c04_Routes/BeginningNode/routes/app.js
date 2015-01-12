var express = require('express');
var app = express();

var sayHello = function(req, res){
  res.send("Hello World!");
}

app.get('/', sayHello);

app.listen(3000);
console.log("Server running");