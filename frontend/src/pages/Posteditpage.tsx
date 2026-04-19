import { useParams,useNavigate } from "react-router-dom";
import PostForm from "../compo/PostForm";
import PostContext from "../context/PostContext";
import { useContext } from "react";


function PostEditPage() {
    const context = useContext(PostContext);
    if (!context) return <p>글을 찾을수가 없습니다</p>
    const { posts, editPost} = context;
    const navigate = useNavigate();
    const {id} = useParams();
    const postId = Number(id);
    const handleEdit = (title:string, content:string) => {
        editPost(postId, title, content);
        navigate("/posts")
    }
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return <p>글을 찾을수가 없습니다</p>
    }

    return (
        <div className="Edit-Page">
            <PostForm 
                initialTitle={post.title}
                initialContent={post.content}
                onSubmit={handleEdit}
            />
            <button onClick={() => {navigate("/posts")}}>나가기 버튼</button>
        </div>
    )
}


export default PostEditPage