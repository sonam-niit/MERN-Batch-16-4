import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddUser() {

    const [user,setUser]=useState({name:'',email:'',username:'',password:''});
    const navigate= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
             const resp=await axios.post("http://localhost:5000/api/user",user);
             if(resp.status==201){
                alert("User Registered Successfully");
                navigate("/list");
             }
        } catch (error) {
            console.log(error.response.data);
            if(error.response.status==400){
                alert(error.response.data.message);
             }
            console.log("Error in Registration",error);
        }
    }

    return ( <div>
        <h2 className='text-center'>User Registration</h2>
        <form className='col-md-6 m-auto' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' placeholder='John Doe' value={user.name} className='form-control'
                onChange={(e)=>setUser({...user,name:e.target.value})} required/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='email' placeholder='john@gmail.com' value={user.email} className='form-control'
                onChange={(e)=>setUser({...user,email:e.target.value})} required />
            </div>
            <div className='form-group'>
                <label>UserName</label>
                <input type='text' placeholder='johndoe' value={user.username} className='form-control'
                onChange={(e)=>setUser({...user,username:e.target.value})} required />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' placeholder='SECRET' value={user.password} className='form-control'
                onChange={(e)=>setUser({...user,password:e.target.value})} required/>
            </div>
            <button className='btn btn-primary mt-2' type='submit'>Register</button>
        </form>
    </div> );
}

export default AddUser;