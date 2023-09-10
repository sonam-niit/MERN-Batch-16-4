import React, { useState } from "react";

export function Counter(){

    const [count,setCount]= useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(<div className="container">
        <h1>Counter Component</h1>
        <h3>Counter Value {count}</h3>
        <button className="btn btn-primary" onClick={increment}>+</button>
        <button className="btn btn-success" onClick={decrement}>-</button>
        
    </div>)
}