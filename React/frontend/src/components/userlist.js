import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserList() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/user");
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser = async (id) => {
        try {
            const resp = await axios.delete("http://localhost:5000/api/user/" + id);
            if (resp.status == 200) {
                alert(resp.data.message);
            }
            getData();
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }
    }
    const editUser = async (id) => {
        navigate("/edit/" + id);
    }
    //call get Data function when component renders for the very first time
    useEffect(() => {
        getData();
    }, [])

    return (<div>
        <h2>User's List</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Name</th><th>Email</th><th>UserName</th><th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>
                                <button className='btn btn-danger'
                                    onClick={() => deleteUser(item._id)}>X</button>

                                <button className='btn btn-success ms-2'
                                    onClick={() => editUser(item._id)}>
                                        edit
                                        {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
                                </button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>);
}

export default UserList;