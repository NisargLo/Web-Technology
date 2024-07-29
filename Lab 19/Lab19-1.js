// Create a hello world webapp using ExpressJS

const express = require('express');

const app = express();

app.get('/', (req, res) => {
     res.send('Hello World');
});

const port = 3100;

app.listen(port, (err) => {
     if (err) {
          console.log(`Error in listening on port ${port}`);
          return;
     }
     console.log(`App is listening on port ${port}`);
});