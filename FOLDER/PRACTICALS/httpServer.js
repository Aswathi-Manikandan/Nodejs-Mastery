const http = require('http')
const server = http.createServer((req, res) => {
    res.end("hello from http server")
})
server.listen(3000, () => {
    console.log('server is running on port 3000');

})
//req	=   The incoming request from the client
//res	=   The response that your server sends back
//res.end() sends the response body and signals that the response is complete.
// listen(3000) tells the server to listen on port 3000.
// The callback runs when the server has successfully started listening.