import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'
const Posts = ({}) => {
    const posts = useLoaderData(); 
    console.log(posts)
    return (
        <div>
                <h2>Post : {posts.length}</h2>
                <div className="posts">
                    {
                        posts.map( post => <Post key={post.id} post={post}></Post>)
                    }
                </div>
            
        </div>
    );
};

export default Posts;