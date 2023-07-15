class Person{
    #name="";
    constructor(name){
        this.#name=name;//private variable
        //Accessible only inside the class
    }

    #privateMethod(){
        console.log("My Private Method "+this.#name)
    }

    publicMethod(){
        console.log("Public method called");
        this.#privateMethod()
        
    }
}
const person= new Person("Sonam");
person.publicMethod();