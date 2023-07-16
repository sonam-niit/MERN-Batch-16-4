function multiple(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
//multiple is also one function which is return by multiple function
const multiplication= multiple(2);
const result=multiplication(4);
console.log("Result: "+result(2))
console.log("Result: "+ multiple(4)(6)(2));
//Arrow Function

const mul=(a)=> (b)=>(c)=>a*b*c;
console.log("Result: "+ mul(4)(6)(2));