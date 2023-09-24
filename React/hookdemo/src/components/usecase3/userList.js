import axios from 'axios';
import React, { useEffect, useState } from 'react';
function UserList() {

    const [users,setUsers]= useState([]);
    const getData=async()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/user');
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();//functiona call when component loads for the very first 
    },[])
    return ( <div className='container'>
            <h2 className='text-center'>Users List</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>UserName</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>{
                            return (<tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
    </div> );
}

export default UserList;