import { useState } from "react";


function PostWritePage() {
    const [title,setTitle] = useState("");
    const [content,setcontent] = useState("");

    return (
        <>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <textarea value={content} onChange={(e) => setcontent(e.target.value)} placeholder="입력"></textarea>
        <button onClick={() => console.log(title, content)}>저장</button>
        </>
    )
}


export default PostWritePage