// Demonstrate “fs” core module in NodeJS.

const fs=require("fs");

fs.exists("./Lab17-3.js",(exists)=>{
     exists ? "File Found" : "File Not Found";
     console.log(exists);
});

fs.stat("./Lab17-3.js",(err,data)=>{
     console.log(data);
});

fs.readFile("./Lab17-3.js",(err,data)=>{
     console.log(data.toString());
});

fs.writeFile("NewFile.txt","Hello World",(err)=>{});

setTimeout(() => {
     fs.appendFile("NewFile.txt",", I am Nisarg Lo",(err)=>{});
},100);

setTimeout(() => {
     fs.rename("NewFile.txt","NewRenamedFile.txt",(err)=>{});
},110);

setTimeout(() => {
     fs.unlink("NewRenamedFile.txt",(err)=>{});
},120);
