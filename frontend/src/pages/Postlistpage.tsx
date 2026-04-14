import { posts } from "../data/posts"



export default function Postlistpage() {
   return (
    <div> {posts.map(post => (
            <div key={post.id}>
                <div>{post.title}</div>
                <div>{post.content}</div>
            </div>
        ))}
    </div>
   )
}