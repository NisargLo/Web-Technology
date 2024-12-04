const express = require('express');
const app = express();
require('dotenv').config({ path: './Lab WT/.env' });

//1. res.download()
app.get('/download', (req, res) => {
    res.download('/path/to/file.txt', 'report.txt', (err) => {
        if (err) {
            res.send('File not found');
        }
    });
});

//2. res.json()
app.get('/json', (req, res) => {
    res.json({ message: "Hello World" });
});

//3. res.jsonp()
app.get('/jsonp', (req, res) => {
    res.jsonp({ user: 'John Doe' });
});

//4. res.redirect()
app.get('/old-path', (req, res) => {
    res.redirect('/new-path');
});

//5. res.render()
app.get('/home', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

//6. res.write()
app.get('/stream', (req, res) => {
    res.write('Hello ');
    res.write('World!');
    res.end();
});

//7. res.send()
app.get('/send', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

//8. res.sendFile()
app.get('/file', (req, res) => {
    res.sendFile('/path/to/file.html');
});

//9. res.sendStatus()
app.get('/status', (req, res) => {
    res.sendStatus(404);
});

//10. res.end()
app.get('/end', (req, res) => {
    res.write('Ending the response.');
    res.end();
});

///11. res.format()
app.get('/format', (req, res) => {
    res.format({
        'text/plain': function () {
            res.send('Plain text response');
        },
        'text/html': function () {
            res.send('<h1>HTML response</h1>');
        },
        'application/json': function () {
            res.json({ message: 'JSON response' });
        },
        default: function () {
            res.status(406).send('Not Acceptable');
        }
    });
});

//12. res.set() / res.header()
app.get('/set-header', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Header is set to text/plain');
});

//13. res.cookie()
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'John Doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

//14. res.clearCookie()
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been cleared');
});

//15. res.location()
app.get('/location', (req, res) => {
    res.location('/new-path');
    res.send('Location header set to /new-path');
});

//16. res.append()
app.get('/append', (req, res) => {
    res.append('Link', '<http://localhost/>');
    res.append('Link', '<http://localhost:3000/>');
    res.send('Links header appended');
});

//17. res.vary()
app.get('/vary', (req, res) => {
    res.vary('User-Agent'); // this means that different user-agent can vary different outputs.
    res.send('Vary header set');
});

//18. res.type()
app.get('/type', (req, res) => {
    res.type('application/json');
    res.send({ message: 'Content-Type set to application/json' });
});

//19. res.links()
app.get('/links', (req, res) => {
    res.links({
        next: 'http://api.example.com?page=2',
        last: 'http://api.example.com?page=10'
    });
    res.send('Links header set');
});

const port = process.env.PORT;
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in listening on port ${port}`);
        return;
    }
    console.log(`App is listening on port ${port}`);
});