const path= require('path');
const filePath="/node/programs/demo1.js";
const myPath= path.parse(filePath);
console.log(myPath)
console.log("File Name: ",path.basename(filePath))
console.log("Extention: ",path.extname(filePath));
console.log("Directory name: ",path.dirname(filePath))
//Create Path using Join
const fullPath= path.join(__dirname,"index.html");
console.log(`Full Path: ${fullPath}`)

const formattedPath= path.format({
    root:"/",
    dir:"/test/check",
    base:"hello.js",
    ext:'.js',
    name:'hello'
})
console.log(`Formatted Path: ${formattedPath}`)