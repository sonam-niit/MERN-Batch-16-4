const os= require('os');

console.log(`Home Directory: ${os.homedir}`);
console.log(`Host Name: ${os.hostname}`);
console.log(`Total Memory in Bytes: ${os.totalmem}`);
console.log(`Free Memory in Bytes: ${os.freemem}`);
//Methods
console.log(`Type: ${os.type()}`);
console.log(`Platform: ${os.platform()}`)
console.log(`Release: ${os.release()}`)
const cpus= os.cpus().length; 
console.log(cpus)
console.log(os.cpus()[0]);
console.log("Architecture",os.arch())