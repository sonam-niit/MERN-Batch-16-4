import React from 'react';
import { useParams } from 'react-router-dom';
import customers from '../components/customer.json';
function Details() {

    const param= useParams();
    const id= param.id; //reading the data from URL

    const cust= customers.find((item)=>item.id==id);
    return (<div>
        <h2>Details of Customer {id}</h2>
        <h3>Name:{cust.name}</h3>
        <h3>Name:{cust.email}</h3>
        <h3>Name:{cust.country}</h3>
    </div>  );
}

export default Details;