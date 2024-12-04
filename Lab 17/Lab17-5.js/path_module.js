// Demonstrate “path” core module in NodeJS. 

const path = require("path");

console.log(path);

console.log(path.basename('D:\\Nisarg\\Node Project\\Lab17-2'));

console.log(path.win32.basename('D:\\Nisarg\\Node Project\\Lab17-2'));

console.log(path.normalize('\\foo\\abc\\..'));

console.log(path.join('\\foo', '..\\bar', '.\\abc'));

console.log(path.resolve('abc', '..', 'xyz'));

console.log(path.relative('\\foo\\bar', '\\foo\\abc'));

console.log(path.dirname('\\foo\\bar\\abc.txt'));

console.log(path.basename('\\foo\\bar\\abc.txt'));

console.log(path.extname('\\foo\\bar\\abc.txt'));



// Additional Methods :-

console.log('\n');
console.log(process.env.PATH);
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

console.log('\n');
console.log(process.env.PATH.split(path.delimiter));
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']

console.log(path.extname('index'));
// Returns: ''

console.log(path.format({
     root: '/',
     name: 'file',
     ext: 'txt',
}));
// Returns: '/file.txt' 

console.log(path.isAbsolute('/foo/bar'), path.isAbsolute('C:/foo/..'));
// Returns: true

console.log(path.isAbsolute('bar\\baz'));
// Returns: false

console.log(path.parse('/home/user/dir/file.txt'));

console.log('foo\\bar\\baz'.split(path.sep));