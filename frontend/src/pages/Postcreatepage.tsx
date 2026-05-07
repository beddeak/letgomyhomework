import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../compo/PostForm";
import PostContext from "../context/PostContext";
import AuthContext from "../context/AuthContext";

function PostCreatePage() {
    const navigate = useNavigate();
    const context = useContext(PostContext);
    const authcontext = useContext(AuthContext);
    if (!context) {
        return <p>오류가 발생했습니다.</p>;
    }
    const { addPost } = context;
    if (!authcontext) {
        return <p>오류가 발생하였습니다</p>
    }
    const { user } = authcontext;
    if (!user) {
        navigate(`/`)
        return null
    }

    const handleWrite = (title: string, content: string,) => {
        addPost(title, content,user.id,user.name);
        navigate("/posts");
    };

    return (
        <div>
            <PostForm onSubmit={handleWrite} />
        </div>
    );
}

export default PostCreatePage;
