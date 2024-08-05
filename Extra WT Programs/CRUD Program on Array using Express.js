// Crud operations on array using Express.js

const express = require('express');
const app = express();
app.use(express.json());
let list = []

// Add items
app.post('/list', (req, res) => {
    const { name } = req.body;
    list.push(name);
    res.send(list);
})

// Display items
app.get('/list', (req, res) => {
    res.send(list);
});

// Update items
app.put('/list/:index', (req, res) => {
    const id = req.params.index;
    const { name } = req.body;
    list[id] = name;
    res.send(list);
});

// Delete items
app.delete('/list/:index', (req, res) => {
    const id = req.params.index;
    list.splice(id, 1);
    res.send(list);
});

const port = 3100;
app.listen(port, (req, res) => {
    console.log(`Server is listening at ${port}`);
})