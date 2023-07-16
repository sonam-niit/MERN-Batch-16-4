const languagesKnown={
    'java' :"Java Programming Langiage",
    'node' : "Node JS",
    'ang'  : "Angular JS",
    "rea" :" React JS",
    "exp" : "express"
}
//console.log(languagesKnown);
//languagesKnown.test="Testing Using Jasmin";
//console.log(languagesKnown);
//Its Mutable We can change It
//How to make it Immutable;
const frozenObject= Object.freeze(languagesKnown);
console.log(frozenObject);
console.log('Forzen: ',Object.isFrozen(frozenObject))
frozenObject.py= "Python";
console.log("After Updating ",frozenObject);
delete frozenObject.ang;
console.log("After Deleting",frozenObject);

console.log(Object.isFrozen(languagesKnown))
languagesKnown.py= "Python";
console.log("After Updating ",languagesKnown);
delete languagesKnown.ang;
console.log("After Deleting",languagesKnown);
