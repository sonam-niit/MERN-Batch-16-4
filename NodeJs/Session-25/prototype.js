//functional constructor (ES5)
var Student = function(name,email,yob){
    this.name=name;
    this.email=email;
    this.yob=yob;
}
Student.prototype.sayHello= function(){
    console.log(`Helloo Everyone...!! My Name is ${this.name}`)
}
Student.prototype.calculateAge= function(){
    console.log(`${this.name}'s age is ${2023-this.yob}`)
}
Student.prototype.display=function(){
    console.log(`Name: ${this.name}`)
    console.log(`Email: ${this.email}`)
    console.log(`Year of Birth: ${this.yob}`)
}

//create an Object
let obj1= new Student("Vaibhav","vaibhav@gmail.com",2000);
console.log(obj1)
obj1.sayHello();
obj1.calculateAge();
obj1.display();