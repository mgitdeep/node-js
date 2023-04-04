// Creating own server
// const http = require('http')

// const server = http.createServer(( req, res ) => {
//     res.end("Hello from the other side...")
// })

// server.listen("9000", '127.0.0.1', () => {
//     console.log("Listening on port 9000...")
// })


// Node js ROUTING
const http = require('http')
const fs = require('fs')

const server = http.createServer(( req, res ) => {

    const data = fs.readFileSync(`${__dirname}/UserAPI/userapi.json`, 'utf-8')
    // const objData = JSON.parse(data)
    // console.log(data)
    
    
    // console.log(req.url)
    if (req.url == "/") {
        res.end("Hello from the other side...")
        // res.end("Hello from the other side...")
    } else if (req.url == "/about") {
        res.end("Hello from the About US side...")
    } else if (req.url == "/userapi") {
        // res.end("Hello from the UserAPI side...")                                        - only one res.end will work
        // res.end('Data is here:')  
        // fs.readFile(`${__dirname}/UserAPI/userapi.json`, 'utf-8', (err, data) => {
            // console.log(data)
            // res.end(data)
            // const objData = JSON.parse(data)
            // res.end(objData[0])                                                          - won't work        
            // res.end(objData)                                                             - wor't work
        // res.end(objData[3].name)
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(data)
            // res.end(data[0].name)                                                        - won't work
            // console.log(objData && objData.status?objData.status: null);
            // res.end(objData && objData.status?JSON.stringify(objData.status): null);
        
        // res.end("Hello from the UserAPI side...")                                        - only one res.end will work
       
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
