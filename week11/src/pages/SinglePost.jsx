import {useNavigate, useParams} from "react-router";
import {useContext, useState} from "react";
import {PostsContext} from "../context/postsContext.jsx";
import {EditPostForm} from "../components/EditPostForm.jsx";

export function SinglePost() {
    const [isEditingForm, setIsEditingForm] = useState(false)
    const {id} = useParams()

    const {data} = useContext(PostsContext)

    const navigate= useNavigate()

    const currentPost = data.find((post) => post.id === Number(id))

    function backToPosts() {
        navigate("/posts")
    }

    return <div>
        <div className="flex flex-row gap-6">
            <button className="border border-red-300 bg-pink-200 rounded p-2" onClick={backToPosts}>Back to Posts</button>
            <button className="border border-red-300 bg-pink-200 rounded p-2" onClick={() => setIsEditingForm(true)}>Edit Post</button>
            <div className="text-2xl font-bold text-red-700">This is the page for product: {id}</div>
        </div>

        {isEditingForm && <EditPostForm post={currentPost} setIsEditingForm={setIsEditingForm}/>}

        <div className="flex flex-col gap-2 items-start justify-start border border-red-300 bg-pink-200 rounded p-4 mt-2">
            <div>
                <span className="font-bold text-lg">Title: </span>
               <span>{currentPost.title}</span>
            </div>
            <div>
                <span className="font-bold text-lg">Body: </span>
                <span> {currentPost.body}</span>
            </div>
        </div>


    </div>
}