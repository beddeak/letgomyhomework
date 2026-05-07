import {  createContext,useState } from "react";

type Post = {
    id:number;
    title:string;
    content:string;
    authorId:number;
    authorName:string;
}

type PostContextType = {
    posts: Post[]
    addPost: (title:string, content:string, authorId:number, authorName:string) => void;
    editPost: (id:number, title:string, content:string) => void;
    deletePost: (id:number) => void;
}

const PostContext = createContext<PostContextType | null>(null)


export function PostContextProvider({children}: {children: React.ReactNode}) {
    const [posts, setPosts] = useState<Post[]>([
        {id:1,title:"안녕하시지",content:"유니유니입니다", authorId:1,authorName:"admin"},
        {id:2,title:"반갑꼬리", content:"헤비가 누군데?", authorId:2, authorName:"test1"},
        {id:3,title:"김찬호 방송켜라",content:"김찬호 무자식", authorId:2, authorName:"test1"},
        {id:4,title:"정상길",content:"정실", authorId:3,authorName:"test2"},
        {id:5,title:"귀염둥이카페손인욱",content:"오고곡", authorId:4, authorName:"test3"}
    ]);

     const addPost = (title:string,content:string,authorId:number,authorName:string) => {
        const Ids = posts.map(post => post.id)
        const newId = Ids.length === 0 ? 1 : Math.max(...Ids) + 1
        const newPost = {
            id:newId,
            title,
            content,
            authorId,
            authorName
        }
        setPosts([...posts, newPost])
    }
    const editPost = (id:number,title:string,content:string) => {
        const edited = posts.map(post => {
            if (post.id !== id) {
                return post;
            } else {
                return {...post, title:title,content:content}
            }
        }
        )
        setPosts(edited);
    }
    const deletePost = (id:number) => {
        const del = posts.filter(post => post.id !== id)
        setPosts(del)
    }
    return (
        <PostContext.Provider value={{posts,editPost,addPost,deletePost}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext