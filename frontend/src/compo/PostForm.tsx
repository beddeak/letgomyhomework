import {useState} from "react";
import "./PostFormStyle.css";

type PostFormprops = {
    initialTitle?: string;
    initialContent?: string;
    onSubmit: (title: string, content: string ) => void;
}


function PostForm({initialTitle= "",initialContent = "", onSubmit}: PostFormprops) {
    const [title,setTitle] = useState(initialTitle);
    const [content,setContent] = useState(initialContent);

    const handleSubmit = () => {
         if(!title.trim()) return alert("제목을 입력하세요");
        if(!content.trim()) return alert("내용을 입력하세요");
        onSubmit(title,content)
    }


    return (
        <div className="write-page">
            <header className="set-title">
                <label>제목</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </header>
            <div className="set-content">
                <label>내용</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className="write-actions">
                <button onClick={handleSubmit}>보내기</button>
            </div>
        </div>
    )
} //저장 로직은 부모(WritePage/EditPage)에서 onSubmit으로 넘겨줌

export default PostForm