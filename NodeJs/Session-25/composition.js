const canPrint={
    print(){
        console.log("Printing.........")
    }
}
const canRead={
    read(){
        console.log("Reading.........")
    }
}

const person= Object.assign({name:"Sonam"},canPrint,canRead);

person.print();
person.read();