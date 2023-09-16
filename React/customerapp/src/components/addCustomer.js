import React, { useState } from 'react';

function AddCustomer({onCustomerAdd}) {

    const [customer,setCustomer]=useState({name:'',email:'',country:''})

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(customer);
        onCustomerAdd(customer);//calling Parent function from Child Component
        setCustomer({name:'',email:'',country:''});
    }
    return (<div>
        <h1>Add Customer</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' placeholder='John Doe' 
                className='form-control'
                value={customer.name} 
                onChange={(e)=>setCustomer({...customer,name:e.target.value})}/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='email' placeholder='john.doe@gmail.com' 
                className='form-control'
                value={customer.email} 
                onChange={(e)=>setCustomer({...customer,email:e.target.value})}/>
            </div>
            <div className='form-group'>
                <label>Country</label>
                <input type='text' placeholder='India' 
                className='form-control'
                value={customer.country} 
                onChange={(e)=>setCustomer({...customer,country:e.target.value})}/>
            </div>
            <button className='btn btn-primary'>Register</button>
        </form>
    </div>  );
}

export default AddCustomer;