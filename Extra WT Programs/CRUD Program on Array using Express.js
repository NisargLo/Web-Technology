// Crud operations on array using Express.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const port = 3100;
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});


let list = []

// Add items
app.post('/list/:name', (req, res) => {
    list.push(req.params.name);
    res.send(`Name added using url.`);
});

app.post('/list', (req, res) => {
    // destructure
    const { name } = req.body;
    list.push(name);

    /*  or simply...
        const obj = req.body;
        list.push(obj.name); 
    */

    res.send(`Name added using json file.`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/list', (req, res) => {
    const name  = req.body;
    list.push(name);
    res.send(`Name added using url-parser file.`);
});


// Display items
app.get('/list', (req, res) => {
    res.send(`List: [${list}]`);
});


// Update items
app.put('/list/:index/:name', (req, res) => {
    list[req.params.index] = req.params.name;
    res.send(`List updated using put by url`);
});

app.put('/list/:index', (req, res) => {
    const { name } = req.body;
    list[req.params.index] = name;
    res.send(`List updated using put by json`);
});

app.patch('/list/:index/:name', (req, res) => {
    list[req.params.index] = req.params.name;
    res.send(`List updated using patch by url`);
});

app.patch('/list/:index', (req, res) => {
    const { name } = req.body;
    list[req.params.index] = name;
    res.send(`List updated using patch by json`);
});


// Delete items
app.delete('/list/:index', (req, res) => {
    list.splice(req.params.index, 1);
    res.send(list);
});