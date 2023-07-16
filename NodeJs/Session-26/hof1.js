
function myTimeOut(cb){

    console.log("Executing My Function Higher Order");

    setTimeout(cb,3000);
}

function callbackFunction(){
    console.log("Executing Callback")
}

myTimeOut(callbackFunction)