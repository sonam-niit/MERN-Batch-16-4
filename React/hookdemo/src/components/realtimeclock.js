import React, { useEffect, useState } from 'react';

function RealTimeClock() {

    const [time,setTime]= useState(new Date());

    useEffect(()=>{

        const intervalId= setInterval(()=>{
            setTime(new Date());
        },1000)

        //Clean up the interval when the component unmount
        return ()=>clearInterval(intervalId);
    },[])
    return ( <div>
        <h2>Real time Clock</h2>
        <p>Current time: {time.toLocaleTimeString()}</p>
    </div> );
}

export default RealTimeClock;