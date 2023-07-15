class Calculate{

    area(x,y){
        if(typeof y === 'undefined'){
            return x*x;
        }else{
            return x*y
        }
    }
}

const cac= new Calculate();
console.log("Square Area: "+ cac.area(23));
console.log("Rectangle Area: "+ cac.area(12,23));