import { useContext } from "react";
import PostForm from "../compo/PostForm";
import PostContext from "../context/PostContext";
import { useNavigate } from "react-router-dom";

function PostWritePage() {
    const navigate = useNavigate();
    const context = useContext(PostContext);
    if (!context) return <p>오류가 발생하였습니다</p>
    const {addPost} = context;
    const handleWrite = (title:string, content:string) => {
        addPost(title,content)
        navigate("/posts")
    }

    return (
        <div>
            <PostForm 
                onSubmit={handleWrite}
            />
        </div>
    )

}

export default PostWritePage