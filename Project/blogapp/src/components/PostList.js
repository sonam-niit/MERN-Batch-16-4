//Display List of Blog posts
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Comments from './Comments';
function PostList() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchUsers = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const viewProfile = (id) => {
        navigate('/profile/' + id);
    }
    const onPostClick = (id) => {
        navigate(`/post/${id}`);
    }
    useEffect(() => {
        fetchUsers();
        fetchData();
    }, [])
    return (<div>
        <h2 className='text-center'>Blog Posts</h2>
        <div className='container'>
            {
                posts.map(post => {
                    const user = users.find(user => user.id === post.userId)
                    return (
                        <div className='m-2 p-2 border border-success' key={post.id}>
                            <button className='btn btn-link'
                                onClick={() => viewProfile(user.id)}><h6>{user.username}</h6></button>
                            <h5 onClick={() => onPostClick(post.id)}>{post.title}</h5>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>);
}

export default PostList;