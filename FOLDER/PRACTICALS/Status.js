const http = require('http')
http.createServer((req, res) => {
    res.statusCode = 200
    res.end("success")
}).listen(3000)