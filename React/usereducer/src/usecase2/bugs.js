import React, { useReducer, useState } from 'react';

function reducer(state,action){
    switch(action.type){
        case 'FIX_BUG':
            return {totalBug:state.totalBug-1};
        case 'CREATE_BUG':
            return {totalBug:state.totalBug+1};
        case 'SET_TOTAL_BUGS':
            return {totalBug:action.payload}
        default:
            return state;
    }
}
const init =(initial)=>{
    console.log(initial); //initial value
    return initial;
}

function Bugs() {

    const [state,dispatch]= useReducer(reducer,{ totalBug:100},init);

    //create a new State so we don't add extra in the reducer state
    const [input,setInput]= useState(0);
    return ( <div>
        <h2>UseReducer in Bugs</h2>
        <p>{state.totalBug} Bugs Left to Resolved</p>
        <button onClick={()=>dispatch({type:'FIX_BUG'})}>Fix</button>
        <button onClick={()=>dispatch({type:'CREATE_BUG'})}>Create Bug</button>

        <input onChange={(e)=>setInput(e.target.value)} value={input}
        type='number' />

        <button onClick={()=>dispatch({type:"SET_TOTAL_BUGS",payload:input})}>Set Total Bugs</button>
    </div> );
}

export default Bugs;