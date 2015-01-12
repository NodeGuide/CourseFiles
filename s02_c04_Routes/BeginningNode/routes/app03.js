var express = require('express');
var app = express();
var routes = require('./routes');

app.get('/', routes.sayHello);

app.listen(3000);
console.log("Server running");