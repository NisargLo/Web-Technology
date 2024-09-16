// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using express 

const express = require('express');
const fs=require('fs');
require('dotenv').config({ path: './Lab WT/.env' });

const app = express();

app.get('/home', (req, res) => {
     res.setHeader('Content-Type','text/plain');
     var home=fs.readFileSync('./Text Files/Home.txt');
     res.send(home);
});

app.get('/about', (req, res) => {
     res.setHeader('Content-Type','text/plain');
     var about=fs.readFileSync('./Text Files/About.txt');
     res.send(about);
});

app.get('/contact', (req, res) => {
     res.setHeader('Content-Type','text/plain');
     var contact=fs.readFileSync('./Text Files/Contact.txt');
     res.send(contact);
});

app.get('/product', (req, res) => {
     res.setHeader('Content-Type','text/plain');
     var product=fs.readFileSync('./Text Files/Product.txt');
     res.send(product);
});

app.get('/services', (req, res) => {
     res.setHeader('Content-Type','text/plain');
     var services=fs.readFileSync('./Text Files/Services.txt');
     res.send(services);
});

const port = process.env.PORT;
app.listen(port, (err) => {
     if (err) {
          console.log(`Error in listening on port ${port}`);
          return;
     }
     console.log(`App is listening on port ${port}`);
});