// Faculty API 

const express = require('express');
const router = express.Router();
const Model = require('./Models/Faculty_Model');


// Display all documents
router.get('/', async (req, res) => {
     const data = await Model.find();
     res.send(data);
});

// Add a new document by save() method
router.post('/save/', async (req, res) => {
     newData = new Model({ ...req.body });
     const result = await newData.save();
     res.send(result);
});

// Add a new document by create() method
router.post('/create/', async (req, res) => {
     const { ID, Name, Class, Roll_No } = req.body;
     const result = await Model.create({ ID, Name, Class, Roll_No });
     res.send(result);
});

// Get first document by parameter
router.get('/first/:parameter', async (req, res) => {
     const data = await Model.findOne({ ID: req.params.parameter });
     res.send(data);
});

// Get all document by parameter
router.get('/all/:parameter', async (req, res) => {
     const data = await Model.find({ ID: req.params.parameter });
     res.send(data);
});

// Get unique document by MongoDB Atlas ID
router.get('/atlas/:id', async (req, res) => {
     const data = await Model.findById(req.params.id);
     res.send(data);
});

// Update only name in document
router.put('/update/name/:parameter', async (req, res) => {
     const stu = await Model.findOne({ ID: req.params.parameter });
     stu.Name = req.body.Name;
     const result = await stu.save();
     res.send(result);
});

// Update full document
router.patch('/update/:parameter', async (req, res) => {
     const newData = req.body;
     const data = await Model.findOneAndUpdate({ ID: req.params.parameter }, newData, { new: true });
     res.send(data);
});

// Delete first document which matches given MongoDB Atlas ID
router.delete('/delete/:parameter', async (req, res) => {
     await Model.deleteOne({ _id: req.params.id });
     res.send("Only One Deleted.");
});

// Delete all documents which matches given parameter
router.delete('/delete/atlas/:id', async (req, res) => {
     await Model.deleteMany({ ID: req.params.id });
     res.send("One/Many Deleted.");
});

// Search name in all documents
router.get('/search/:parameter', async (req, res) => {
     const result = await Model.find({
          Name: {
               $regex: req.params.parameter
          }
     });
     res.send(result);
});


module.exports = router;