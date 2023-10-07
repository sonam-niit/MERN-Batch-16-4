import React, { useState } from 'react';
import Parent from './Parent';

function GrandParent() {

    const [data,setData]= useState('Hello From Grand parent');

    const changeData=(e)=>{
        setData(e.target.value)
    }
    return ( <div>
        <h1>Grand Parent</h1>
        <Parent data={data} setData={changeData} />
    </div> );
}

export default GrandParent;