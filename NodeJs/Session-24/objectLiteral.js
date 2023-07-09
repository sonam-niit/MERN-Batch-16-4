const name = "John";
const age = 34;

const user = { name, age };//property shorthand

console.log(user.name);
console.log(user.age);

//Computed Property name
const propertyName = 'color';
const car = {
    [propertyName]: 'blue'
}

console.log(car.color);

const calculator = {

    add(a, b) { return a + b; },

    sub(a, b) { return a - b; }
}

console.log("Addition", calculator.add(2, 3));

console.log("Subtract", calculator.sub(2, 3));