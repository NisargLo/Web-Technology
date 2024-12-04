// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module.

const fs = require("fs");
const http = require("http");
require('dotenv').config({ path: './Lab WT/.env' });

const server = http.createServer((req, res) => {
     if(req.url === "/home"){
          fs.readFile("./Text Files/Home.txt",(err,data)=>{
               res.end(data);
          });
     }
     else if(req.url === "/about"){
          fs.readFile("./Text Files/About.txt",(err,data)=>{
               res.end(data);
          });
     }
     else if(req.url === "/contact"){
          fs.readFile("./Text Files/Contact.txt",(err,data)=>{
               res.end(data);
          });
     }
     else if(req.url === "/docs"){
          fs.readFile("./Text Files/Docs.txt",(err,data)=>{
               res.end(data);
          });
     }
     else if(req.url === "/news"){
          fs.readFile("./Text Files/News.txt",(err,data)=>{
               res.end(data);
          });
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