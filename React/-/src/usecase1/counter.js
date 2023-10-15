import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Counter() {

    const count= useSelector(state=>state.counterReducer.count);
    const dispatch= useDispatch();//calling Actions

    return ( <div>
        <h1>Counter Component</h1>
        <p>Count: {count}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </div> );
}

export default Counter;