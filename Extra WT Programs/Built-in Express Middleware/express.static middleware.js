// Use of express.static middleware.

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/image', express.static(path.join(__dirname, 'public')));

app.use('/myimage/p2.jpg', express.static(path.join(__dirname, 'myPublic/Paris-2.jpg')));
// Here, in 'myPublic' folder, nobody will be able to access 'Paris-1.jpg' (safe & secure).

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});