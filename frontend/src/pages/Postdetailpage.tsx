import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
 

interface Post {
    title:string;
    id:number;
    content:string;
}


const posts: Post[] = [
    {title:"처음왔어요",id:1,content:"신규유저"},
    {title:"나는누구",id:2,content:"나는누구"},
    {title:"엄준식",id:3,content:"흠"}
];


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