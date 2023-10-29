import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {

    const navigate= useNavigate();
    const [user,setUser]= useState({name:'',email:'',username:'',password:''})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        //console.log(user);
        try {
            const resp= await axios.post('http://localhost:5000/api/auth/register',user);
            if(resp.status==201){
                alert("User Registered");
                navigate('/login');
            }else{
                console.log("Not registered",resp);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    return ( <div>
        <h3 className='text-center'>Registration Form</h3>
        <div className='col-lg-6 offset-3'>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <label>Name</label>
                <input type='text' placeholder='Name' className='form-control'
                value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
            </div>
            <div className='form-group mb-3'>
                <label>Email</label>
                <input type='email' placeholder='Email' className='form-control'
                value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className='form-group mb-3'>
                <label>UserName</label>
                <input type='text' placeholder='UserName' className='form-control'
                value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
            </div>
            <div className='form-group mb-3'>
                <label>Password</label>
                <input type='password' placeholder='*******' className='form-control'
                value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>
        </div>
        
    </div> );
}

export default Register;