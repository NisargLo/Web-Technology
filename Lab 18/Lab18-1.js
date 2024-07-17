// Create a hello world webapp using “http” core module in NodeJS

const http = require("http");

const server = http.createServer((req, res) => {
     res.end("Hello World");
});

const port = 3100;

server.listen(3100,()=>{
     console.log("Server is listening on port 3100");
});