// Create a hello world webapp using “http” core module in NodeJS

const http = require("http");
require('dotenv').config({ path: './Lab WT/.env' });

const server = http.createServer((req, res) => {
     res.statuscode=200;
     res.setHeader("Content-Type", "text/html");
     res.end("<center><h1>Hello World</h1></center>");
});

const port = process.env.PORT;
server.listen(port, (err) => {
     if (err) {
          console.log(`Error in listening on port ${port}`);
          return;
     }
     console.log(`App is listening on port ${port}`);
});