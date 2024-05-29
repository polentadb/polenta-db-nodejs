var http = require('http');
const http_handler = require('./handler/http');

function handleRequest(request, response) {
    http_handler.handleRequest(request).then((data) => {
        response.end(data);
    }).catch((error) => {        
        console.log(error.message);
        response.end(error.message);
    });
}

var server = http.createServer(
    function (request, response) { 
        handleRequest(request, response); 
    }
);

server.listen(3000);