import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UseCase2() {
    const user= useSelector(state=>state.userReducer.user);//reading state from store
    const dispatch= useDispatch();//for triggering actions

    const login=()=>{
        dispatch({type:"SUCCESS",payload:{id:Date.now(),name:newData}});
        //we are triggering success action and passing payload to 
        //update the user State
        setNewData('');
    }

    const [newData,setNewData]=useState('');
    return ( <div>
        <input type='text' value={newData} onChange={e=>setNewData(e.target.value)}
        placeholder='Enter Your UserName' />

        <button onClick={login}>Login</button>
        {/* When State updated its reflecting below */}
        <h2>{user && user.name}</h2>
    </div> );
}

export default UseCase2;