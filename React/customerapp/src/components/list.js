import React, { useState } from 'react';
import customers from '../components/customer.json';
import { useNavigate } from 'react-router-dom';
function List() {

    const [cust,setCust]=useState(customers);
    const navigate= useNavigate();

    const viewCust=(id)=>{
        navigate('/details/'+id)
    }
    return ( <div>
        <h2>List Component</h2>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Country</th><th>Operations</th></tr>
          </thead>
          <tbody>
              {
                cust.map((item,index)=>{
                  return(<tr key={index} >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.country}</td>
                      <td><button className='btn btn-success' onClick={()=>viewCust(item.id)}>View</button></td>
                  </tr>)
                })
              }
          </tbody>
      </table>
    </div> );
}

export default List;