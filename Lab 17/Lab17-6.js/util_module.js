// Demonstrate “util” core module in NodeJS.

const util = require('util');

// Example for util.promisify()
const fs = require('fs');

// fs.readFile is a callback-based function
const readFileAsync = util.promisify(fs.readFile);

// Using the promisified function
readFileAsync('example.txt', 'utf8')
     .then(data => {
          console.log('Using `util.promisify()`:\n');
          console.log('File Content:\n' + data + '\n');
     })
     .catch(err => {
          console.error('Error:\n' + err + '\n');
     });

// Example for util.callbackify()
const asyncFunction = async () => {
     return 'Async result';
};

// Convert async function to callback-based function
const callbackFunction = util.callbackify(asyncFunction);

// Using the callbackified function
callbackFunction((err, result) => {
     if (err) {
          console.error('Callback Error:\n' + err + '\n');
     } else {
          console.log('Using `util.callbackify()`:\n');
          console.log('Callback Result:\n' + result + '\n');
     }
});

// Example for util.inspect()
const obj = { name: 'Nisarg', age: 25 };
console.log('Using `util.inspect()`:\n');
console.log('Object Inspection:\n' + util.inspect(obj, { showHidden: false, depth: null }) + '\n');

// Example for util.format()
const formattedString = util.format('Hello, %s! You are %d years old.', 'Nisarg', 25);
console.log('Using `util.format()`:\n');
console.log('Formatted String:\n' + formattedString + '\n');

// Example for util.deprecate()
function oldFunction() {
     console.log('This function is deprecated');
}

// Wrap the old function with deprecation warning
const newFunction = util.deprecate(oldFunction, 'oldFunction() is deprecated. Use newFunction() instead.');

console.log('Using `util.deprecate()`:\n');
newFunction(); // Logs warning message along with the function output