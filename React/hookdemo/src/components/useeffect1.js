import React,{useEffect} from 'react';

function UseEffectDemo1() {

    useEffect(()=>{
        console.log("Executing in Background");
    })
    
    return ( <div>
        <h1>Hello World</h1>
    </div> );
}

export default UseEffectDemo1;