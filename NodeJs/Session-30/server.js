const http = require('http');

//created Server
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home Page</h1>");
        res.end();
    } else if (req.url == "/about") {
        res.end("About Us Page")
    } else if (req.url == "/contact") {
        res.end("Contact Us Page")
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>The Page you are trying access not found</h1>");
        res.end();
    }

})
//start server
server.listen(5000, () => {
    console.log("Server listing on PORT 5000");
})