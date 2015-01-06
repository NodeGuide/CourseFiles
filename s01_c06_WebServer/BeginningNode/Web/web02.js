var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
  console.log(req.method, req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url == '/about') {
    res.end('About!\n');
  } else {
    res.end('Everything Else!\n');
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000');