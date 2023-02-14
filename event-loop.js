const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Timer 2 Finished"));

fs.readFile('text-file.txt', 'utf8', () => {
    console.log("I/O Finished");

    setTimeout(() => console.log("Timer 2 Finished"), 0);
    setTimeout(() => console.log("Timer 3 Finished"), 3000);
    setImmediate(() => console.log("Timer 1 Finished"));

    process.nextTick(() => console.log("Process.nextTick"));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
});

console.log("Hello From The Top Level");