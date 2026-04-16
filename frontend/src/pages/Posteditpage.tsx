import { useParams } from "react-router-dom";
import PostForm from "../compo/PostForm";
import { posts } from "../data/posts";


function PostEditPage() {
    const handleEdit = (title:string, content:string) => {
        console.log(title,content)
    }
    const {id} = useParams();
    const postId = Number(id);
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
        </div>
    )
}


export default PostEditPage