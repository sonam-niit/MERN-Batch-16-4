function Counter() {
    //private variable
    let count = 0;
    //private function
    function increment() {
        count++;
    }
    //public methods
    this.getCount = function () {
        return count; //returnig inner count
    }
    this.incrementCount = function () {
        increment(); //calling inner function
    }
}
const counterObj = new Counter();
console.log(counterObj.getCount());
counterObj.incrementCount();
console.log(counterObj.getCount());

