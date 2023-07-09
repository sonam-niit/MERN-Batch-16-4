const symbol= Symbol();
const obj={};

obj[symbol]="This my Symbol Property"

console.log(obj[symbol]);

//Create the same in Another Way

const symbol1= Symbol('Symbol with its description');
const symbol2= Symbol('Symbol with its description');
console.log(symbol1.toString());
console.log(symbol1==symbol2)