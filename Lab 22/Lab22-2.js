//Create a Database using MongoDBCompass for student. 

const express = require('express');
const mongoose = require('mongoose');
const Model = require('./Models/Student_Model');
const app = express();
app.use(express.json());
require('dotenv').config({ path: './Lab WT/.env' });

mongoose.connect(process.env.MongoDB_Atlas_URL).then(() => {
     console.log('MongoDB Connected');

     // Display all documents
     app.get('/', async (req, res) => {
          const data = await Model.find();
          res.send(data);
     });

     // Add a new document by save() method
     app.post('/save/', async (req, res) => {
          newData = new Model({...req.body});
          const result = await newData.save();
          res.send(result);
     });

     // Add a new document by create() method
     app.post('/create/', async (req, res) => {
          const { ID, Name, Class, Roll_No } = req.body;
          const result = await Model.create({ ID, Name, Class, Roll_No });
          res.send(result);
     });

     // Get first document by parameter
     app.get('/first/:parameter', async (req, res) => {
          const data = await Model.findOne({ ID: req.params.parameter });
          res.send(data);
     });

     // Get all document by parameter
     app.get('/all/:parameter', async (req, res) => {
          const data = await Model.find({ ID: req.params.parameter });
          res.send(data);
     });


     // Get unique document by MongoDB Atlas ID
     app.get('/atlas/:id', async (req, res) => {
          const data = await Model.findById(req.params.id);
          res.send(data);
     });

     // Update only name in document
     app.put('/update/name/:parameter', async (req, res) => {
          const stu = await Model.findOne({ ID: req.params.parameter });
          stu.Name = req.body.Name;
          const result = await stu.save();
          res.send(result);
     });

     // Update full document
     app.patch('/update/:parameter', async (req, res) => {
          const newData = req.body;
          const data = await Model.findOneAndUpdate({ ID: req.params.parameter }, newData, { new: true });
          res.send(data);
     });

     // Delete first document which matches given MongoDB Atlas ID
     app.delete('/delete/:parameter', async (req, res) => {
          await Model.deleteOne({ _id: req.params.id });
          res.send("Only One Deleted.");
     });

     // Delete all documents which matches given parameter
     app.delete('/delete/atlas/:id', async (req, res) => {
          await Model.deleteMany({ ID: req.params.id });
          res.send("One/Many Deleted.");
     });

     // Search name in all documents
     app.get('/search/:parameter', async (req, res) => {
          const result = await Model.find({
               Name: {
                    $regex: req.params.parameter
               }
          });
          res.send(result);
     });


     /*
          -> For My ID:-
               .findOne({ ID: req.params.parameter });
               .findOneAndUpdate({ ID: req.params.parameter }, newData, { new: true });

          -> For MongoDB Atlas default id:-
               .findById(req.params.id)
               .findByIdAndUpdate(req.params.id, newData, { new: true });
     */


     const port = process.env.PORT;
     app.listen(port, (err) => {
          if (err) {
               console.log(`Error in listening on port ${port}`);
               return;
          }
          console.log(`App is listening on port ${port}`);
     });
});
