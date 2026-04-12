interface Post {
    title:string;
    id:number;
    content:string;
}


const Posts: Post[] = [
    {title:"처음왔어요",id:1,content:"신규유저"},
    {title:"나는누구",id:2,content:"나는누구"},
    {title:"엄준식",id:3,content:"흠"}
]





export default function Postlistpage() {
   return (
    <div> {Posts.map(post => (
            <div key={post.id}>
                <div>{post.title}</div>
                <div>{post.content}</div>
            </div>
        ))}
    </div>
   )
}