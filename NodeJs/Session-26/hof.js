function higherorderFunction(cb){
    console.log("Executing Hight order Function");

    cb();
}

function callbackFunction(){
    console.log("Executing Callback Function")
}

higherorderFunction(callbackFunction);