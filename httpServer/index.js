// Creating own server
// const http = require('http')

// const server = http.createServer(( req, res ) => {
//     res.end("Hello from the other side...")
// })

// server.listen("9000", '127.0.0.1', () => {
//     console.log("Listening on port 9000...")
// })


// Node js routing
const http = require('http')

const server = http.createServer(( req, res ) => {
    
    // console.log(req.url)
    if (req.url == "/") {
        res.end("Hello from the other side...")
    } else if (req.url == "/about") {
        res.end("Hello from the About US side...")
    } else {
        res.writeHead(404, {"Content-type": "text/html"})
        res.write("<h1> Not found! </h1>")
        res.end()
        // res.end("Not found!")        You can directly do this instead of writing two lines to send a response!
    }
})

server.listen("9000", '127.0.0.1', () => {
    console.log("Listening on port 9000...")
})