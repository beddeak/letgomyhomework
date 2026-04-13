import { useParams } from "react-router-dom";
import { useState } from "react";
  

interface Post {
    title:string;
    id:number;
    content:string;
}


const posts: Post[] = [
    {title:"처음왔어요",id:1,content:"신규유저"},
    {title:"나는누구",id:2,content:"나는누구"},
    {title:"엄준식",id:3,content:"흠"}
]

function PostEditPage() {
    const {id} = useParams();
    const PostId = Number(id);
    const post = posts.find(post => post.id === PostId);
    const [title,setTitle] = useState(post?.title ?? "")
    const [content,setContent] = useState(post?.content ?? "")

    if (!post) {
        return <p>글을 찾을수가 없습니다</p>
    }

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}>입력하세요</textarea>
        </div>
    )
}



export default PostEditPage