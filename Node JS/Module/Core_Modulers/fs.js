The fs module in Node.js is a built-in core module used to interact with the file system — such as: 
-- Reading files 
--Writing to files 
--Appending content 
--Renaming, deleting, creating directories

>> It works both asynchronously and synchronously 
>>Asynchronous methods (like fs.readFile) are non-blocking 
>>Synchronous methods (like fs.readFileSync) are blocking — they wait for the task to finish 

Method           Description                                  Sync Version 
fs.readFile     Reads file                                 content fs.readFileSync 
fs.writeFile    Writes data (replaces existing content)    fs.writeFileSync 
fs.appendFile   Appends data to file                       fs.appendFileSync 
fs.unlink       Deletes a file                             fs.unlinkSync 
fs.mkdir        Creates folder                             fs.mkdirSync 
fs.rename       Renames a file                             fs.renameSync


 >>>>fs.readFile(path, encoding, callback)
const fs = require('fs'); 
fs.readFile('file.txt', 'utf8', (err, data) => { 
if (err) return console.error(err); 
console.log(data); // Output file content 
});

 >>>fs.writeFile(path, data, callback) 
fs.writeFile('note.txt', 'Hello, world!', (err) => { 
if (err) return console.error(err); 
console.log('File written'); 
});