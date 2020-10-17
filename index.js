var http = require('http');
var os = require('os');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>I am ${os.hostname()}</h1>`);
}).listen(8080);
