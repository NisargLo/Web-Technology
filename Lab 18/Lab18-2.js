// Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.

const http = require("http");

const server = http.createServer((req, res) => {
     if(req.url === "/home"){
          res.end("Home");
     }
     else if(req.url === "/about"){
          res.end("About");
     }
     else if(req.url === "/contact"){
          res.end("Contact");
     }
     else if(req.url === "/docs"){
          res.end("Documentation");
     }
     else if(req.url === "/news"){
          res.end("News");
     }
});

const port = 3100;

server.listen(3100,()=>{
     console.log("Server is listening on port 3100");
});