const fs= require('fs');

fs.appendFile("./files/demo.txt","This is My New Message..!!",(err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("Data Appended Successfully");
    }
})