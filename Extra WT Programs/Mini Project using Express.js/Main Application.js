const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
require('dotenv').config({ path: './Lab WT/.env' });
const Student = require('./Student_API');
app.use('/student', Student);
const Faculty = require('./Faculty_API');
app.use('/faculty', Faculty);
const Product = require('./Product_API');
app.use('/product', Product);

mongoose.connect(process.env.MongoDB_Atlas_URL).then(() => {
     console.log('MongoDB Connected to faculties folder');
     console.log('MongoDB Connected to students folder');
     console.log('MongoDB Connected to products folder');

     const port = process.env.PORT;
     app.listen(port, (err) => {
          if (err) {
               console.log(`Error in listening on port ${port}`);
               return;
          }
          console.log(`App is listening on port ${port}`);
     });
});