import { useParams } from "react-router-dom";
import { useState } from "react";
import {posts} from "../data/posts";


function PostEditPage() {
    const {id} = useParams();
    const postid = Number(id);
    const post = posts.find(post => post.id === postid)
    const [title,setTitle] = useState(post?.title ?? "");
    const [content,setContent] = useState(post?.content ?? "")


    if (!post) {
        return <p>글을 찾을수가 없습니다</p>
    }

    return (
        <div className="edit-page">
            <header className="editpage-title">
                <h1>수정할 글 제목을 입력하시오</h1>
            </header>
            <div className="edit-body">
                <div className="set-title">
                    <label>제목</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목"/>
                </div>
                <div className="set-content">
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
                </div>
            </div>
            <div className="edit-actions">
                <button onClick={() => console.log(title,content)}>저장</button>
            </div>
        </div>
    )
}


export default PostEditPage