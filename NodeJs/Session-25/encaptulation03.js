//Using Module
const Counter= (function(){
    let count=0;

    function increment(){
        count++;
    }
    function getCount(){
        return count;
    }

    return {
        incrementCount:increment,
        getCount:getCount
    }
})();
//IIFE: immediate Invocation function Execution
//call the function as soon as its created.

console.log(Counter.getCount());
Counter.incrementCount();
console.log(Counter.getCount());
