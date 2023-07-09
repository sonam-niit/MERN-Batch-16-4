function* numberGenerator(){
    let num=1;
    while(true){
        yield num;
        num++;
    }
}

const myGenerator= numberGenerator();
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);