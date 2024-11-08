import { Link, useNavigate } from "react-router-dom";
import "./../Posts/Posts.css";
const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="postStyle">
      <h2>Posts Id: {post.id}</h2>
      <h2>{post.title}</h2>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleShowDetail}>Click to Show Details</button>
    </div>
  );
};

export default Post;
