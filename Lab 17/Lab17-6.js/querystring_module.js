// Demonstrate “querystring” core module in NodeJS

const querystring = require('querystring');

// Example query string
const queryStr = 'name=Nisarg&surname=Lo&age=25';

// 1. Parsing a Query String
const parsedQuery = querystring.parse(queryStr);
console.log('\nParsed Query Object:');
console.log(parsedQuery);
// Output: { name: 'Nisarg', surname: 'Lo', age: '25' }
// Converts a query string into an object where keys and values are extracted from the query string.

// Access individual parameters from the parsed object
console.log('\nName:', parsedQuery.name); // Output: Nisarg
console.log('\nSurname:', parsedQuery.surname); // Output: Lo
console.log('\nAge:', parsedQuery.age); // Output: 25

// 2. Formatting an Object into a Query String
const obj = {
     name: 'Nisarg',
     surname: 'Lo',
     age: 25
};
const formattedQuery = querystring.stringify(obj);
console.log('\nFormatted Query String:');
console.log(formattedQuery);
// Output: name=Nisarg&surname=Lo&age=25
// Converts an object into a query string.

// 3. Escaping and Unescaping (Deprecated but still present)
const escapedQuery = querystring.escape('name=Nisarg&surname=Lo');
console.log('\nEscaped Query String:');
console.log(escapedQuery);
// Output: name%3DNisarg%26surname%3DLo
// The '&' character is encoded as %26
// The '=' character is encoded as %3D

const unescapedQuery = querystring.unescape('name%3DNisarg%26surname%3DLo');
console.log('\nUnescaped Query String:');
console.log(unescapedQuery);
// Output: name=Nisarg&surname=Lo
