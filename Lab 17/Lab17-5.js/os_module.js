// Demonstrate “os” core module in NodeJS

const os = require('os');

// End-of-line marker for the operating system.
console.log("EOL:", os.EOL);
// Provides the end-of-line marker for the operating system. E.g., '\n' on UNIX-like systems, '\r\n' on Windows.

console.log("\nCPU Architecture:", os.arch());
// Returns the CPU architecture (e.g., 'x64', 'arm'). Indicates the architecture of the CPU.

console.log("\nOS Constants:", os.constants);
// Provides operating system constants such as signal constants and resource limits. Useful for system-level programming.

console.log("\nCPU Info:", os.cpus());
// Returns an array of objects containing information about each logical CPU core, including model, speed, and times.

console.log("\nFree Memory:", os.freemem());
// Returns the amount of free system memory in bytes. Useful for monitoring memory usage.

console.log("\nHome Directory:", os.homedir());
// Returns the home directory of the current user. Typically used to locate user-specific files.

console.log("\nHostname:", os.hostname());
// Returns the hostname of the operating system. Identifies the machine on a network.

console.log("\nLoad Average:", os.loadavg());
// Returns an array with the system load averages for the past 1, 5, and 15 minutes. Provides an overview of system load.

console.log("\nNetwork Interfaces:", os.networkInterfaces());
// Returns an object containing network interfaces and their addresses. Useful for networking and debugging network issues.

console.log("\nPlatform:", os.platform());
// Returns the operating system platform (e.g., 'linux', 'win32'). Indicates the OS on which the process is running.

console.log("\nRelease:", os.release());
// Returns the operating system release version. Provides version information of the OS.

console.log("\nTemp Directory:", os.tmpdir());
// Returns the default directory for temporary files. Typically used for storing temporary data.

console.log("\nTotal Memory:", os.totalmem());
// Returns the total amount of system memory in bytes. Useful for understanding the system’s memory capacity.

console.log("\nOS Type:", os.type());
// Returns the operating system name (e.g., 'Linux', 'Darwin'). Provides a high-level OS identifier.

console.log("\nUptime:", os.uptime());
// Returns the system uptime in seconds. Shows how long the system has been running since the last reboot.

console.log("\nUser Info:", os.userInfo());
// Returns information about the current user, including username and home directory.

console.log("\nOS Version:", os.version());
// Returns the operating system version. Provides detailed version information of the OS.

console.log("\nAvailable Parallelism:", os.availableParallelism());
// Returns the number of CPU cores available for parallel execution. Indicates how many cores are available for Node.js to use.

console.log("\nDev Null Path:", os.devNull);
// Provides a path to a special device file for discarding output. Useful for redirecting output that you want to ignore.

try {
     console.log("\nProcess Priority:", os.getPriority());
     // Returns the priority of the specified process (default to the current process). Shows process scheduling priority.

     os.setPriority(0, 10); // Example: Set priority (assuming valid PID and priority). Sets the priority of the specified process.
     console.log("\nProcess Priority:", os.getPriority());
} 
catch (error) {
     console.error("Error getting or setting priority:", error);
     // Handles any errors that occur while getting or setting the process priority.
}