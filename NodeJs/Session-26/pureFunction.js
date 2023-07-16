//let rateOfIntrest=5.5;
function calculateIntrest(principle,rateOfIntrest, noOfYears){

    return (principle*rateOfIntrest*noOfYears)/100;
}

const result =calculateIntrest(1000,4.5,3);
console.log("Intrest: "+ result);