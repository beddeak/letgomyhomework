import { posts } from "../data/posts";
import { Link } from "react-router-dom";
import "./PostListPageStyle.css";



function PostListPage() {
   return (
    <div className="post-list-page"> {posts.map(post => (
            <div key={post.id} className="post-item">
                <Link to={`/posts/${post.id}/detail`} className="post-title">{post.title}</Link>
                <div className="post-content">{post.content}</div>
            </div>
        ))}
    </div>
   )
}

export default PostListPage