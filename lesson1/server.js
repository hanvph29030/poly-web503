const http = require('http')
const fs = require('fs') //file system

const server = http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {
        "Content-Type": "text/html"
    })

    if (req.url == "/") {
        const home = fs.readFileSync('./pages/home.html')
        res.write(home)
    }

    if (req.url == "/product") {
        const product = fs.readFileSync('./pages/product.html')
        res.write(product)
    }

    res.end()
})

server.listen(8080, function () {
    console.log("Server running on 8080");
})