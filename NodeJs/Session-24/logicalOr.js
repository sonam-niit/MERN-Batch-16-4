

function check(value) {
    const defaultValue = 'Default';

    const result = value || defaultValue;
    return result;
}

console.log("Check with some Value",check("Hello"));
console.log("Check with NULL",check(null));
console.log("Check with Undefined",check(undefined));
console.log("Check with Empty String",check(""));
console.log("Check with 0",check(0));
console.log("Check with False",check(false));