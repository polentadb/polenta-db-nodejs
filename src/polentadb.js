var http = require('http');

var server = http.createServer(function(req,res){
    res.end("<html><body>Polenta DB - NodeJS version</body></html>");
});

server.listen(3000);