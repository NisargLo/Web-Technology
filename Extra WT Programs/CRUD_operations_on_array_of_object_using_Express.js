// Crud operations on array of object using Express.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3100;
app.listen(port, () => {
     console.log(`Server is listening at http://localhost:${port}`);
});

let list = [];


// Add items using JSON data
app.post('/list/json', (req, res) => {
     const { id, name, age } = req.body;
     if (!id || !name || !age) {
          return res.status(400).send('Missing required fields.');
     }
     const obj = { id, name, age };
     list.push(obj);
     res.status(201).send('Object added using JSON data.');
});

// Add items using URL-encoded data
app.post('/list/urlencoded', (req, res) => {
     const { id, name, age } = req.body;
     if (!id || !name || !age) {
          return res.status(400).send('Missing required fields.');
     }
     const obj = { id, name, age };
     list.push(obj);
     res.status(201).send('Object added using URL-encoded data.');
});


// Display items
app.get('/list', (req, res) => {
     res.status(200).send(list);
});

app.get('/list/:id', (req, res) => {
     const listToDisplay = list.find(item => item.id == req.params.id);
     if (!listToDisplay) {
          return res.status(404).send('Object not found.');
     }
     res.status(200).send(listToDisplay);
});


// Update items
app.put('/list/:id', (req, res) => {
     const index = list.findIndex(item => item.id == req.params.id);
     if (index === -1) {
          return res.status(404).send('Object not found.');
     }
     list[index] = { ...list[index], ...req.body }; // Merge existing data with new data
     res.status(200).send('Object updated.');
});

app.patch('/list/:id', (req, res) => {
     const index = list.findIndex(item => item.id == req.params.id);
     if (index === -1) {
          return res.status(404).send('Object not found.');
     }
     list[index] = { ...list[index], ...req.body }; // Merge existing data with new data
     res.status(200).send('Object updated.');
});


// Delete items
app.delete('/list/:id', (req, res) => {
     const index = list.findIndex(item => item.id == req.params.id);
     if (index === -1) {
          return res.status(404).send('Object not found.');
     }
     list.splice(index, 1);
     res.status(200).send('Object deleted.');
});
