import { useState } from 'react';
import customers from './customer.json';
import CustomerDetail from './customerDetail';
import AddCustomer from './addCustomer';
function CustomerManagement() {
  const [cust,setCust]=useState(customers);
  const [selected,setSelected]= useState(null);

  const selectCustomer=(obj)=>{
    setSelected(obj);
  }
  //function in Parent Component
  const addCustomer=(obj)=>{
    obj.id= cust.length+1;
    setCust([...cust,obj]);
    alert("Customer Added Successfully");
  }
  return (
    <div className="container">
      <h1 className="text-center">Customer Management System</h1>
      <table className='table table-bordered table-striped'>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Country</th></tr>
          </thead>
          <tbody>
              {
                cust.map((item,index)=>{
                  return(<tr key={index} onClick={()=>{selectCustomer(item)}}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.country}</td>
                  </tr>)
                })
              }
          </tbody>
      </table>

      <div className='row'>
        <div className='col-lg-6'>
             {selected!==null && 
             <CustomerDetail customer={selected} />}
        </div>
        <div className='col-lg-6'>
          <AddCustomer onCustomerAdd={addCustomer} />
        </div>
      </div>
    </div>
  );
}

export default CustomerManagement;
