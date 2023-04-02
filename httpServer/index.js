
const http = require('http')

const server = http.createServer(( req, res ) => {
    res.end("Hello from the other side...")
})

server.listen("9000", '127.0.0.1', () => {
    console.log("Listening on port 9000...")
})