import React from 'react';
import Child from './Child';
function Parent({data,setData}) {
    console.log(setData);
    return ( <div>
        <h2>Parent</h2>
        <Child data={data} setData={setData} />
    </div> );
}

export default Parent;