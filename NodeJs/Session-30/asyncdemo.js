const fs= require('fs');

console.log("Reading data started");

fs.readFile("./files/demo.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }
})

console.log("Data reading finished..!!")