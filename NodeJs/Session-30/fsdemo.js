const fs= require('fs');

//create file
fs.writeFile('./files/demo.txt',"Testing Data..!",
(err)=>{
    if(err){
        console.log(err)
    }else{
       console.log("Data Written Successfully..!!") 
    }
})
fs.readFile('./files/demo.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
       console.log("Data Read Successfully..!!") 
       console.log(data.toString())
    }
})