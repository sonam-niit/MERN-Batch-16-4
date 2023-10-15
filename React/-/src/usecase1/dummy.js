import React from 'react';
import { useSelector } from 'react-redux';
function Dummy() {
    const data= useSelector((state)=>state.counterReducer.count)
    return ( <div>
        <h3>Dummy Component: {data}</h3>
    </div> );
}

export default Dummy;