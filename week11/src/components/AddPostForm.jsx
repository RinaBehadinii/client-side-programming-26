import {useContext, useState} from "react";
import {PostsContext} from "../context/postsContext.jsx";

export function AddPostForm({setIsAddingPost}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const {data, setData} = useContext(PostsContext)

    function addNewPost() {
        if(title !== "" && body !== "") {
            const newPost = {
                userId: 1,
                id: data.length + 1,
                title: title,
                body: body
            }

            setData((prevState) => {
                return [...prevState, newPost]
            })

            setTitle("")
            setBody("")
            setIsAddingPost(false)
        }
    }

    return <div className="flex flex-col gap-4 item-start border border-pink-500 rounded p-2 m-4">
        <div className="font-bold text-lg">Add Posts</div>
        <input
            className="border border-gray-700"
            placeholder="Title..."
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            className="border border-gray-700"
            placeholder="Body..."
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={addNewPost} className="rounded bg-white font-bold text-pink-500 p-2 border border-pink-700">Add Post</button>
    </div>
}