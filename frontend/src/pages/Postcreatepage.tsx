import PostForm from "../compo/PostForm";

function PostWritePage() {
    const handleWrite = (title: string, content: string) => {
        console.log(title, content);
    };

    return (
        <div>
            <PostForm onSubmit={handleWrite} />
        </div>
    );
}

export default PostWritePage;