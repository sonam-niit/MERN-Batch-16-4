//ES6
class Student {
    constructor(name, email, yob) {
        this.name = name;
        this.email = email;
        this.yob = yob;
    }
    sayHello() {
        console.log(`Helloo Everyone...!! My Name is ${this.name}`)
    }
    calculateAge() {
        console.log(`${this.name}'s age is ${2023 - this.yob}`)
    }
    display() {
        console.log(`Name: ${this.name}`)
        console.log(`Email: ${this.email}`)
        console.log(`Year of Birth: ${this.yob}`)
    }
}
//create an Object
let obj1 = new Student("Vaibhav", "vaibhav@gmail.com", 2000);
console.log(obj1)
obj1.sayHello();
obj1.calculateAge();
obj1.display();
