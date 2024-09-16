const express = require('express');
const app = express();

// Middleware function to log request details
function logRequests(req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next(); // Pass control to the next middleware function
}

// Use the logging middleware
app.all('/', logRequests);

// Define a route
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

app.get('/:i', (req, res) => {
    res.end('\nD');
});

app.get('/:info$/', (req, res) => {
    res.end('\nC\n'+req.params);
});



// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
