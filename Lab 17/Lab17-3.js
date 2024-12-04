// Demonstrate “fs” core module in NodeJS.

const fs = require("fs");

fs.exists("./Lab17-3.js", (exists) => {
     console.log(exists ? "File Found" : "File Not Found");
});

// fs.exists("./Lab17-3.js");

fs.stat('./Lab17-3.js', (err, stats) => {
     if (err) {
          console.error(err);
     } else {
          console.log('File stats:', stats);
          console.log('Is File:', stats.isFile());
          console.log('Is Directory:', stats.isDirectory());
     }
});

//asynchronous
fs.readFile("./Lab17-3.js", (err, data) => {
     console.log(data.toString());
});

//synchronous
const data = fs.readFileSync('./Lab17-3.js');
console.log("data - " + data.toString());

fs.writeFile("NewFile.txt", "Hello World", (err) => {
     if (err) {
          console.log(err);
     } else {
          console.log("File Written");
     }
});

setTimeout(() => {
     fs.appendFile("NewFile.txt", ", I am Nisarg Lo", (err) => {
          if (err) {
               console.log(err);
          } else {
               console.log("File Appended");
          }
     });
}, 100);

setTimeout(() => {
     fs.rename("NewFile.txt", "NewRenamedFile.txt", (err) => {
          if (err) {
               console.log(err);
          } else {
               console.log("File Renamed");
          }
     });
}, 200);

setTimeout(() => {
     fs.unlink("NewRenamedFile.txt", (err) => {
          if (err) {
               console.log(err);
          } else {
               console.log("File Deleted");
          }
     });
}, 300);



// Additional Methods :-

fs.mkdir('./parent/child', { recursive: true }, (err) => {
     // With { recursive: true }
     if (err) console.error(err);
     else console.log('Directories created successfully');
});

// Creating directory
fs.mkdir('./parent/child', (err) => {
     // Without { recursive: true }
     if (err) console.error(err);  // Will fail if 'parent' directory does not exist
     else console.log('Directories created successfully');
});

// Removing directory
fs.rmdir('./newDirectory', (err) => {
     if (err) {
          console.error(err);
     } else {
          console.log('Directory removed');
     }
});

// Resolving absolute path of a file
fs.realpath('./Lab17-3.js', (err, resolvedPath) => {
     if (err) {
          console.error(err);
     } else {
          console.log('Absolute path: ', resolvedPath);
     }
});