import React, { useReducer } from 'react';

//Reducer Function
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}
        default:
            return state;
    }
};

function Counter() {

    const [state,dispatch]=useReducer(reducer,{count:0});

    return ( <div>
        <h2>Counter Component</h2>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
    </div> );
}

export default Counter;