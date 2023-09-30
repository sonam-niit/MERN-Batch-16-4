import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function EditUser() {

    const params= useParams();
    const [user,setUser]=useState({name:'',email:'',username:'',password:''});
    const navigate= useNavigate();
    const getUserById=async()=>{
        try {
            const resp=await axios.get("http://localhost:5000/api/user/"+params.id);
            if(resp.status==200){
              setUser(resp.data);
            }
       } catch (error) {
           //console.log(error.response.data);
           console.log("Error in Fetching user",error);
       }
    }
    useEffect(()=>{ getUserById()},[])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
             const resp=await axios.put("http://localhost:5000/api/user/"+params.id,user);
             if(resp.status==200){
                alert("User Updated Successfully");
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
        <h2 className='text-center'>User Update</h2>
        <form className='col-md-6 m-auto' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' placeholder='John Doe' value={user.name} className='form-control'
                onChange={(e)=>setUser({...user,name:e.target.value})} required/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' placeholder='SECRET' value={user.password} className='form-control'
                onChange={(e)=>setUser({...user,password:e.target.value})} required/>
            </div>
            <button className='btn btn-primary mt-2' type='submit'>Update</button>
        </form>
    </div> );
}

export default EditUser;