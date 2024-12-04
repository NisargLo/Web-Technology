// Demonstrate the use of middleware in Express.

const express = require('express');
const app = express();
require('dotenv').config({ path: './Lab WT/.env' });


app.all('/', logRequests);
function logRequests(req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next();
}

app.get('/:info',
    (req, res, next) => {
        res.write('A');
        if (req.params.info == 0) {
            next();
        }
        else {
            next('route');
        }
    },
    (req, res) => {
        res.end('\nB');
    }
);

app.get('/:info', (req, res) => {
    res.end('\nC');
});


const port = process.env.PORT;
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in listening on port ${port}`);
        return;
    }
    console.log(`App is listening on port ${port}`);
});