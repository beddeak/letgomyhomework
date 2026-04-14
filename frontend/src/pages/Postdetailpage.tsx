import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { posts } from "../data/posts"

function PostDetailPage() {
    const {id} = useParams();
    const postId = Number(id);
    const post = posts.find(post => post.id === postId);
    
    if (!post) {
        return <p>글을 찾을수가 읎어요</p>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}/edit`}>수정하러가기</Link>
        </div>
    )
}



export default PostDetailPage