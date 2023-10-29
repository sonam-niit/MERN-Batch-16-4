import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({onLogin}) {
    const navigate= useNavigate();
    const [user,setUser]= useState({username:'',password:''})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        //console.log(user);
        try {
            const resp= await axios.post('http://localhost:5000/api/auth/login',user);
            if(resp.status==200){
                alert(resp.data.message);
                //localStorage.setItem('loggedIn',true);
                onLogin();
                navigate('/dashboard');
            }
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
        
    }

    return ( <div>
        <h3 className='text-center'>Login Form</h3>
        <div className='col-lg-6 offset-3'>
        <form onSubmit={handleSubmit}>
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
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
        </div>
        
    </div> );
}

export default Login;