

function check(value) {
    const defaultValue = 'Default';

    const result = value ?? defaultValue;
    return result;
}

console.log(check("Hello"));
console.log(check(null));
console.log(check(undefined));
console.log("Result",check(""));
console.log("Result",check(0));
console.log("Result",check(false));
