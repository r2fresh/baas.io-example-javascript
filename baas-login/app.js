var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200,{'contentType':'text/html'});
    res.write(fs.readFileSync('index.html'));
    res.end();
}).listen('4000');


