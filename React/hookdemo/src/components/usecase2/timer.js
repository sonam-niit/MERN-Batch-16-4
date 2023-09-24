import React, { useEffect, useState } from 'react';
function Timer() {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log(count);
        setTimeout(()=>setCount(count+1),1000)
    })
    return (<div>
        <h3>Timer</h3>
        <h4>Count {count}</h4>
    </div>  );
}

export default Timer;