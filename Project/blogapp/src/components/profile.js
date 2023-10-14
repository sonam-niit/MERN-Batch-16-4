import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {

    const params = useParams();
    const [user, setUser] = useState({});
    const fetchUser = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (<div className='container'>
        <div className='m-2 p-2 border border-primary'>
            <h3>{user.name}</h3><hr />
            <h6>Phone:{user.phone}</h6>
            <h6>Website:{user.website}</h6>
            <div className='row'>
                <div className='col'>
                    <h6>Company:</h6>
                    <ul>
                        <li>{user.company.name}</li>
                        <li>{user.company.catchPhrase}</li>
                        <li>{user.company.bs}</li>
                    </ul>
                </div>
                <div className='col'>
                    <h6>Address:</h6>
                    <ul>
                        <li>{user.address.street}</li>
                        <li>{user.address.suite}</li>
                        <li>{user.address.city}</li>
                        <li>{user.address.zipcode}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>);
}

export default Profile;