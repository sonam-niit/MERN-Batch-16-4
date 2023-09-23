import React, { useEffect, useState } from 'react';

function UseCaseInputValidation() {

    const [input,setInput]= useState('');
    const [isValid,setIsValid]=useState(false);

    useEffect(()=>{
        if(input.length<5){
            setIsValid(false);
        }else{
            setIsValid(true)
        }
    },[input])
    return (<div>
                <form>
                    <label>Write Something</label>
                    <input type='text' id='input' placeholder='Write Something'
                    onChange={(e)=>{setInput(e.target.value)}}></input>
                </form>
                <p><span style={isValid?{backgroundColor:'lightgreen'}:{backgroundColor:'lightpink'} }>
                    {isValid?'Valid input':'Invalid Input'}</span></p>
    </div>  );
}

export default UseCaseInputValidation;