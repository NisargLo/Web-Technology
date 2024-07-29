// Create a webapp with 5 pages like about, contact etc.. using ExpressJS.

const express = require('express');

const app = express();

app.get('/home', (req, res) => {
     res.send('Home Page');
});

app.get('/about', (req, res) => {
     res.send('About Page');
});

app.get('/contact', (req, res) => {
     res.send('Contact Page');
});

app.get('/product', (req, res) => {
     res.send('Product Page');
});

app.get('/services', (req, res) => {
     res.send('Services Page');
});

const port = 3100;

app.listen(port, (err) => {
     if (err) {
          console.log(`Error in listening on port ${port}`);
          return;
     }
     console.log(`App is listening on port ${port}`);
});