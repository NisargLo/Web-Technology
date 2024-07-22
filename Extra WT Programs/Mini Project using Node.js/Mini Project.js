const http = require("http");
const fs = require("fs");
var url = require("url");

const server = http.createServer((req, res) => {
  if (req.url == "/Home.html" || req.url == "/home") {
    res.write(fs.readFileSync("./Home.html"));
  } else if (req.url == "/About.html" || req.url == "/about") {
    res.write(fs.readFileSync("./About.html"));
  } else if (req.url == "/Contact.html" || req.url == "/contact") {
    res.write(fs.readFileSync("./Contact.html"));
  } else if (req.url == "/Services.html" || req.url == "/services") {
    res.write(fs.readFileSync("./Services.html"));
  } else if (req.url == "/Product.html" || req.url == "/product") {
    res.write(fs.readFileSync("./Product.html"));
  }
    res.end(fs.readFileSync("./Mini Project Style.css"));
});

const port = 3100;

server.listen(port, () => {
  console.log("Server is listening on port 3100.");
});