function filterArray(array,cb){

    const filteredArray=[];

    for(let i=0;i<array.length;i++){
        if(cb(array[i])){
            filteredArray.push(array[i])
        }
    }
    return filteredArray;
}
const numbers=[1,2,3,4,5,6,7,8];
const evenNumbers= filterArray(numbers,(num)=>{
    return num % 2 ===0;
})

console.log(evenNumbers)