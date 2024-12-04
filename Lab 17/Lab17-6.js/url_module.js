// Demonstrate “url” core module in NodeJS

const url = require('url');

// Example URL
const address = 'https://www.darshan.ac.in/abcd.js?Name=Nisarg&SurName=Lo';

// Parse the URL
const parsedUrl = url.parse(address, true);

console.log("\nParsed URL Information:");
console.log("Host:", parsedUrl.host);
// Returns the host portion of the URL (e.g., 'www.darshan.ac.in').

console.log("\nPathname:", parsedUrl.pathname);
// Returns the path portion of the URL (e.g., '/abcd.js').

console.log("\nSearch Query String:", parsedUrl.search);
// Returns the query string of the URL (e.g., '?Name=Nisarg&SurName=Lo').

const qdata = parsedUrl.query;
console.log("\nQuery Name:", qdata.Name);
// Returns the value of the 'Name' query parameter (e.g., 'Nisarg').

console.log("\nQuery Surname:", qdata.SurName);
// Returns the value of the 'SurName' query parameter (e.g., 'Lo').

// Format a URL object back to a string
const formattedUrl = url.format(parsedUrl);
console.log("\nFormatted URL:", formattedUrl);
// Returns the URL as a string (e.g., 'https://www.darshan.ac.in/abcd.js?Name=Nisarg&SurName=Lo').

// Resolve a URL relative to a base URL
const base = 'https://www.darshan.ac.in/';
const relative = 'abcd.js?Name=Nisarg&SurName=Lo';
const resolvedUrl = url.resolve(base, relative);
console.log("\nResolved URL:", resolvedUrl);
// Resolves the relative URL against the base URL (e.g., 'https://www.darshan.ac.in/abcd.js?Name=Nisarg&SurName=Lo').

console.log("\nURL Constants:");
console.log(url.constants);
// Displays constants used by the `url` module, if any.

// Directly using url.parse()
const parsedUrlDirect = url.parse('https://example.com/path?query=string', true);
console.log("\nParsed Direct URL Host:", parsedUrlDirect.host);

// Directly using url.format()
const formattedDirectUrl = url.format({ 
     protocol: 'https:', 
     host: 'example.com', 
     pathname: '/path' 
});
// converts to string format.
console.log("\nFormatted Direct URL:", formattedDirectUrl);