// Demonstrate “http” core module in NodeJS.

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
     // Log the request method and URL
     console.log(`Received ${req.method} request for ${req.url}`);

     // Set response headers and status code
     res.writeHead(200, { 'Content-Type': 'text/plain' });

     // Send a response body
     res.write('Hello World\n');

     // End the response
     res.end('Goodbye World\n');
});

// Start the server to listen on port 3000
server.listen(3000, '127.0.0.1', () => {
     console.log('Server running at http://127.0.0.1:3000/');
});

// Access server information
console.log('\nServer Information:');
console.log('Address:', server.address()); // Get the server's bound address

// Handle server errors
server.on('error', (err) => {
     console.error('Server error:', err);
});

// Example HTTP client request
const options = {
     hostname: 'www.example.com',
     port: 80,
     path: '/',
     method: 'GET'
};

// Make an HTTP request
const req = http.request(options, (res) => {
     let data = '';

     // Receive data chunks
     res.on('data', (chunk) => {
          data += chunk;
     });

     // When the response ends, log the data
     res.on('end', () => {
          console.log('\nHTTP Request Response:');
          console.log(data);
     });
});

// Handle request errors
req.on('error', (e) => {
     console.error('Request error:', e);
});

// End the request
req.end();

// Set and get headers (demonstrates working with headers)
const headers = {
     'Content-Type': 'application/json',
     'Authorization': 'Bearer token'
};

// Simulate setting headers in a request (headers setting is part of request options)
console.log('\nExample Request Headers:');
console.log(headers);

// Demonstrate HTTP status codes
console.log('\nHTTP Status Codes:');
console.log('200:', http.STATUS_CODES[200]); // OK
console.log('404:', http.STATUS_CODES[404]); // Not Found
console.log('500:', http.STATUS_CODES[500]); // Internal Server Error

// Cleanup: Stop the server after 60 seconds
setTimeout(() => {
     server.close(() => {
          console.log('Server closed');
     });
}, 60000);
