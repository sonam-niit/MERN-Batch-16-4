
class Parent{

    phone(){
        console.log("Calling from parents Phone")
    }
    
}

class Child extends Parent{
    phone(){
        console.log("Calling from Owns Phone")
    }
    
}

let childObj= new Child();
childObj.phone();