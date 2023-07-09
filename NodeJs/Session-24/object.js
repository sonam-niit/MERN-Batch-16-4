const car={
    //variables Declaration
    carname:"Tata Punch",
    color:"Black",
    model:"Top",
    //Function Declaration
    start(){
        console.log(`${this.carname} started`)
    },
    stop(){
        console.log(`${this.carname} stopped`)
    }
}

console.log(car.carname);
console.log(car.color);
console.log(car.model);
car.start();
car.stop()