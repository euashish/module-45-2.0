import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {title, body, id} = post;
     const navigate = useNavigate();

     console.log(postId)
    const handleGoBack =()=>{
        navigate(-1)
        
    }

    return (
        <div>
            <h3>Post Details: {id} </h3>
            <p>Title: {title}</p>
            <button onClick={handleGoBack}>Go back</button>
            
        </div>
    );
};

export default PostDetails;