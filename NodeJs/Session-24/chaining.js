const person={
    name:"alex",
    address:{
        city:'New york',
        street:'123 Main St.'
    },
    phonebook:{
        personal:"123456789",
        home:"1234567899"
    }
}

console.log(person?.address?.city);
console.log(person?.phonebook?.personal);

const person1={
    name:"John",
    address:{
        city:'New york',
        street:'123 Main St.'
    }
}
console.log(person1?.address?.city);
console.log(person1?.phonebook?.personal);