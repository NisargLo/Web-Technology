// Demonstrate the use of static middleware in Express.

const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config({ path: './Lab WT/.env' });


app.use('/image', express.static(path.join(__dirname, 'public')));
// Here in 'public' folder, we can access all files.

app.use('/myimage/p2.jpg', express.static(path.join(__dirname, 'myPublic/Paris-2.jpg')));
// Here, in 'myPublic' folder, nobody will be able to access 'Paris-1.jpg' (safe & secure).


const port = process.env.PORT;
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in listening on port ${port}`);
        return;
    }
    console.log(`App is listening on port ${port}`);
});