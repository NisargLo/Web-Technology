// Demonstrate “path” core module in NodeJS. 

const path = require("path");

console.log(path);

console.log(path.basename('\n\nD:\\Nisarg\\Node Project\\Lab17-2'));

console.log(path.win32.basename('\n\nD:\\Nisarg\\Node Project\\Lab17-2'));

console.log(path.normalize('\\foo\\abc\\..'));

console.log(path.join('\\foo', 'bar', 'abc'));

console.log(path.resolve('abc', 'xyz'));

console.log(path.relative('\\foo\\bar','\\foo\\abc'));

console.log(path.dirname('\\foo\\abc.txt'));

console.log(path.basename('\\foo\\abc.txt'));

console.log(path.extname('\\foo\\abc.txt'));