// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module.

const fs = require("fs");
const http = require("http");

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

const port = 3100;

server.listen(3100,()=>{
     console.log("Server is listening on port 3100");
});