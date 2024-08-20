const http = require("http");
const fs = require("fs");
require('dotenv').config({ path: './Lab WT/.env' });

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

const port = process.env.PORT;
server.listen(port, (err) => {
  if (err) {
    console.log(`Error in listening on port ${port}`);
    return;
  }
  console.log(`App is listening on port ${port}`);
});