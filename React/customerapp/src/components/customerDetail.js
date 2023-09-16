import React from 'react';


function CustomerDetail({customer}) {


    return ( <div>
        <h2>Customer Detail Component</h2>
        <ul>
            <li>Id: {customer.id}</li>
            <li>Name: {customer.name}</li>
            <li>Email: {customer.email}</li>
            <li>Country: {customer.country}</li>
        </ul>
    </div> );
}

export default CustomerDetail;