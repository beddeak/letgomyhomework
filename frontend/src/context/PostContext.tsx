import {  createContext,useState } from "react";

type Post = {
    id:number;
    title:string;
    content:string;
}

type PostContextType = {
    posts: Post[]
    addPost: (title:string, content:string) => void;
    editPost: (id:number, title:string, content:string) => void;
    deletePost: (id:number) => void;
}

const PostContext = createContext<PostContextType | null>(null)


export function PostContextProvider({children}: {children: React.ReactNode}) {
    const [posts, setPosts] = useState<Post[]>([
        {id:1,title:"안녕하시지",content:"유니유니입니다"},
        {id:2,title:"반갑꼬리", content:"헤비가 누군데?"},
        {id:3,title:"김찬호 방송켜라",content:"김찬호 무자식"},
        {id:4,title:"정상길",content:"정실"},
        {id:5,title:"귀염둥이카페손인욱",content:"오고곡"}
    ]);

    const addPost = (title:string,content:string) => {
        const newPost = {id:posts.length + 1, title:title, content:content}
        setPosts([...posts, newPost]);
    }
    const editPost = (id:number, title:string, content:string) => {
        const edited = posts.map(post => {
            if (post.id === id) {
                return {id: id, title:title, content:content}
            } else {
                return post;
            } 
            
        })
        

        setPosts(edited)
    } 
    const deletePost = (id:number) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    return (
        <PostContext.Provider value={{ posts, addPost, editPost,deletePost }}>
            {children}
        </PostContext.Provider>
    ); 
}
export default PostContext