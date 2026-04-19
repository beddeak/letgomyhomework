import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostContext from "../context/PostContext";
import { useContext } from "react";

function PostDetailPage() {
    const context = useContext(PostContext)
    if (!context) return <p>글을 찾을수 없습니다</p>
    const { posts,deletePost } = context;
    const navigate = useNavigate();
    const {id} = useParams();
    const postId = Number(id);
    const post = posts.find(post => post.id === postId);
    const handledelete = () => {
        deletePost(postId);
        navigate("/posts");
    }

    
    if (!post) {
        return <p>글을 찾을수가 읎어요</p>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}/edit`}>수정하러가기</Link>
            <button onClick={handledelete}>글 삭제하기</button>
        </div>
    )
}



export default PostDetailPage