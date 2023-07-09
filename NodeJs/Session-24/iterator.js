const arr=[1,2,3,4,5];

const itertaor= arr[Symbol.iterator]();
//This Symbol.iterator is inbuilt property available in all array, map,set objects

console.log(itertaor.next().value);
console.log(itertaor.next().value);
console.log(itertaor.next().value);
console.log(itertaor.next().value);
console.log(itertaor.next().value);