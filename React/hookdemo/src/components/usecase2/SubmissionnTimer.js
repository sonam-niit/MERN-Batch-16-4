import React, { useState, useEffect } from 'react';

function SubmissionTimer({submissionDate}) {

    const [timeLeft,setTimeLeft]= useState(null);

    const calculateTimeLeft=()=>{
        const now= new Date().getTime();
        const submissionTime= new Date(submissionDate).getTime();
        const timeDiffrence=submissionTime-now;

        if(timeDiffrence<=0){
            setTimeLeft("Submission CLosed");
        }else{
            //calculation remaining time
            const days=Math.floor(timeDiffrence/(1000*60*60*24));
            const hours= Math.floor((timeDiffrence% (1000*60*60*24))/(1000*60*60));
            const minutes=Math.floor((timeDiffrence%(1000*60*60))/(1000*60));
            const seconds= Math.floor((timeDiffrence%(1000*60))/1000);

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        }
    }

    useEffect(()=>{
        calculateTimeLeft();

        //update time
        const timeInterval= setInterval(calculateTimeLeft,1000);
        //clean up
        return()=>clearInterval(timeInterval);
    },[submissionDate])
    return ( <div>
        <h2>Time Left for the Submisison:</h2>
        <p>{timeLeft}</p>
    </div> );
}

export default SubmissionTimer;