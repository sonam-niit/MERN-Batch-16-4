class Counter{
    //Private Variable
    #count=0;
    //private Function
    #increment(){
        this.#count++
    }
    getCount(){
        return this.#count;
    }
    incrementCount(){
        this.#increment();
    }
}

const counterObj= new Counter();
counterObj.count;
console.log(counterObj.getCount());
counterObj.incrementCount();
console.log(counterObj.getCount());