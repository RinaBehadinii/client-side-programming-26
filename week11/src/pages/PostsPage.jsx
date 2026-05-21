import {useContext, useState} from "react";
import {PostsContext} from "../context/postsContext.jsx";
import {PostCard} from "../components/PostCard.jsx";
import {AddPostForm} from "../components/AddPostForm.jsx";

export function PostsPage() {
    const [isAddingPost, setIsAddingPost] = useState(false)

    const {data} = useContext(PostsContext)

    console.log({data})

    return <div>
        <div className="flex flex-row justify-between m-4">
            <div className="text-2xl font-bold text-red-600">This is the POSTS page!</div>
            <button onClick={() => setIsAddingPost(true)} className="rounded bg-white font-bold text-pink-500 p-2 border border-pink-700">Add a Post</button>
        </div>

        {/*Add Form*/}
        {isAddingPost && <AddPostForm setIsAddingPost={setIsAddingPost}/>}

        <div className="m-2">
            { data.length > 0 &&
                data.map((post) => {
                    return <PostCard key={post.id} post={post}/>
                })
            }
        </div>
    </div>
}