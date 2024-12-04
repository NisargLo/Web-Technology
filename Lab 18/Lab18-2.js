// Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.

const http = require("http");
require('dotenv').config({ path: './Lab WT/.env' });

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

const port = process.env.PORT;
server.listen(port, (err) => {
     if (err) {
          console.log(`Error in listening on port ${port}`);
          return;
     }
     console.log(`App is listening on port ${port}`);
});