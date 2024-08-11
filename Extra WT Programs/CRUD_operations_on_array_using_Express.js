// Crud operations on array using Express.js

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3100;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

let list = [];


// Add items

// Using JSON data
app.post('/list/json', (req, res) => {
    const { name } = req.body;
    if (name) {
        list.push(name);
        res.send(`Name added using URL-encoded body.`);
    } else {
        res.status(400).send('Name is required in the request body.');
    }
});

// Using URL-encoded data
app.post('/list/urlencoded', (req, res) => {
    const { name } = req.body;
    if (name) {
        list.push(name);
        res.send(`Name added using URL-encoded body.`);
    } else {
        res.status(400).send('Name is required in the request body.');
    }
});

// Using URL parameter
app.post('/list/:name', (req, res) => {
    list.push(req.params.name);
    res.send(`Name added using URL parameter.`);
});


// Display items
app.get('/list', (req, res) => {
    res.json(list); // Better to use JSON format for arrays
});

app.get('/list/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < list.length) {
        res.send(`Element at index ${index} is ${list[index]}`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});


// Update items

// Using URL parameter
app.put('/list/:index/:name', (req, res) => {
    const index = req.params.index;
    const name = req.params.name;
    if (index >= 0 && index < list.length) {
        list[index] = name;
        res.send(`List updated using PUT with URL parameters.`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});

// Using JSON body
app.put('/list/json/:index', (req, res) => {
    const index = req.params.index;
    const { name } = req.body;
    if (index >= 0 && index < list.length) {
        list[index] = name;
        res.send(`List updated using PUT with JSON body.`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});

// Using URL-encoded body
app.put('/list/urlencoded/:index', (req, res) => {
    const index = req.params.index;
    const { name } = req.body;
    if (index >= 0 && index < list.length) {
        list[index] = name;
        res.send(`List updated using PUT with JSON body.`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});

// Using URL parameter
app.patch('/list/:index/:name', (req, res) => {
    const index = req.params.index;
    const name = req.params.name;
    if (index >= 0 && index < list.length) {
        list[index] = name;
        res.send(`List updated using PATCH with URL parameters.`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});

// Using JSON body
app.patch('/list/json/:index', (req, res) => {
    const index = req.params.index;
    const { name } = req.body;
    if (index >= 0 && index < list.length) {
        list[index] = name;
        res.send(`List updated using PATCH with JSON body.`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});

// Using URL-encoded body
app.patch('/list/urlencoded/:index', (req, res) => {
    const index = req.params.index;
    const { name } = req.body;
    if (index >= 0 && index < list.length) {
        list[index] = name;
        res.send(`List updated using PUT with JSON body.`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});


// Delete items
app.delete('/list/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
        res.send(`Element deleted at index ${index}`);
    } else {
        res.status(404).send('Index out of bounds.');
    }
});