import { Link } from 'react-router-dom';
import './../Posts/Posts.css'
const Post = ({post}) => {
    const {id, title, } = post;
    return (
        <div className='postStyle'>
            <h2>Posts: {post.id}</h2>
            <h2>{post.title}</h2>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};
   
export default Post;