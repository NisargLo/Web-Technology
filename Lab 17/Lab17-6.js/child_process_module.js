// Demonstrate “child_process” core module in NodeJS

const child_process = require("child_process");

// 'ls -l' command to print info about file and directories of root
child_process.exec('dir', (error, stdout, stderr) => {
     if (error) {
          // error - gives error if problem with syntax of command
          console.error(`exec error: ${error}`);
          return;
     }
     console.log(`stdout: ${stdout}`);

     // stderr - gives error if problem in accessing file or directory
     if (stderr) {
          console.error(`stderr: ${stderr}`);
     }
});



// Additional Methods :-

const path = require('path');
const javaFileName = path.basename('./Hello_World.java');
const classFileName = 'Hello_World'; 
child_process.execFile('javac', [javaFileName], (compileError) => {
     if (compileError) {
          console.error(`Compilation error: ${compileError}`);
          return;
     }
     console.log('Compilation successful.');
     
     child_process.execFile('java', [classFileName], (runError, stdout, stderr) => {
          if (runError) {
               console.error(`Execution error: ${runError}`);
               return;
          }
          console.log(`Output: ${stdout}`);
          if (stderr) {
               console.error(`stderr: ${stderr}`);
          }
     });
});