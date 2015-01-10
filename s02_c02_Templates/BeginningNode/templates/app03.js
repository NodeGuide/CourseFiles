var express = require("express");
var app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get("/:name", function(req, res){
  res.render("template", {name: req.params.name});
});

app.listen(3000);
console.log("Server running...");