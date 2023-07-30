const fs= require('fs');

console.log("Reading started");

const data= fs.readFileSync('./files/demo.txt');
console.log(data.toString());

console.log("Reading Finished");