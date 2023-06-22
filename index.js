var http = require('http');
var hostname = 'localhost';
var port = 8000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World.');
});
server.listen(port, hostname, function () {
    console.log("Server listening at https://".concat(hostname, ":").concat(port, "/"));
});
