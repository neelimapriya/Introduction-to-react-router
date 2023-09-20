import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post =useLoaderData();
    const navigate=useNavigate();

    const {id, title, body}=post;

    const handleGOBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Post Details About: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGOBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;