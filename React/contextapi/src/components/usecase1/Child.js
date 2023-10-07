import React from 'react';
function Child({data,setData}) {
    return ( <div>
        <h2>Child</h2>
        <p>{data}</p>
        <input type='text' value={data}
        onChange={setData} />
        
    </div> );
}

export default Child;