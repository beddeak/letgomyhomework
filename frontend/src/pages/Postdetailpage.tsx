import { useParams,useNavigate,Link } from "react-router-dom";
import PostContext from "../context/PostContext";
import { useContext } from "react";

function PostDetailPage() {
    const navigate = useNavigate();
    const context = useContext(PostContext);
    if (!context) return <p>글을 찾을수가없습니다</p>
    const { posts , deletePost } = context;
    const {id} = useParams();
    const postId = Number(id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        return <p>글을 찾을수가없습니다</p>
    } 
    const handleDelete = () => {
        deletePost(postId);
        navigate("/posts")
    }

    return (
        <div className="detail-page">
            <header className="detail-title">
                <h1>{post.title}</h1>
            </header>
            <div className="detail-username">
                <p>{post.authorName}</p>
            </div>
            <div className="detail-body">
                <p>{post.content}</p>
            </div>
            <footer className="detail-actions">
                <Link to={`/posts/${post.id}/edit`}>글 수정</Link>
                <button onClick={handleDelete}>글 삭제하기</button>
            </footer>
        </div>
    )
}

export default PostDetailPage