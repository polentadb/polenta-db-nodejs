module.exports.handleRequest = (request) => {
    return hreq(request);
}

function hreq(request) {
    const customPromise = new Promise((resolve, reject) => {    
        if(request.method == "GET") {
          resolve("<html><body>Polenta DB - NodeJS version</body></html>")
        } else if(request.method == "POST") {
          resolve("<html><body>HTTP method not yet implemented.</body></html>")
        } else {
          reject(new Error('HTTP method not supported!'))
        }
    })
    return customPromise
}