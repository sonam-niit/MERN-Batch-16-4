import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Comments() {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const fetchPost = async () => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            setPost(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchComments = async () => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
            setComments(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);
    return (<div className='container'>
        <div className='border border-success m-2 p-2'>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
        <h6 className='text-center'>Comments {comments.length}</h6>
        <ul className='list-group'>
            {
                comments.map(comment => {
                    return (
                        <li className='list-group-item' key={comment.id}>
                            <strong>{comment.name}</strong>:{comment.body}
                        </li>
                    )
                })
            }
        </ul>
    </div>
    </div>);
}

export default Comments;