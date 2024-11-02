import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body, id} = post;

    return (
        <div>
            <h3>Post Details: {id} </h3>
            <p>Title: {title}</p>
            
        </div>
    );
};

export default PostDetails;