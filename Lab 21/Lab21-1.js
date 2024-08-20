const express = require('express');
const mongoose = require('mongoose');
const Model = require('./Model');
const app = express();
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL).then(() => {
     console.log('MongoDB Connected');

     // Display all documents
     app.get('/', async (req, res) => {
          const data = await Model.find();
          res.send(data);
     });

     // Add a new document
     app.post('/add', async (req, res) => {
          const { ID, Name, Class, Roll_No } = req.body;
          const ans = await Model.create({ ID, Name, Class, Roll_No });
          res.send(ans);
     });

     // Get document by parameter
     app.get('/:parameter', async (req, res) => {
          const data = await Model.find({ ID: req.params.parameter });
          res.send(data);
     });

     // Get document by MongoDB Atlas ID
     app.get('/1/:id', async (req, res) => {
          const data = await Model.findById(req.params.id);
          res.send(data);
     });

     const port = process.env.PORT;
     app.listen(port, (err) => {
          if (err) {
               console.log(`Error in listening on port ${port}`);
               return;
          }
          console.log(`App is listening on port ${port}`);
     });
});