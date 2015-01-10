var express = require("express");
var app = express();

app.get("/:name", function(req, res){
  // res.send("Hello " + req.params.name);
  res.render("template.ejs", {name: req.params.name});
});

app.listen(3000);
console.log("Server running...");