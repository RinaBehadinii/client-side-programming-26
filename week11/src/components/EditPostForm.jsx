import {useContext, useState} from "react";
import {PostsContext} from "../context/postsContext.jsx";

export function EditPostForm({post, setIsEditingForm}) {
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)

    const {setData} = useContext(PostsContext)

    function editPost() {
        if(title !== "" && body !== "") {
            setData((prevState) => {
                return prevState.map((prevPost) => {
                    if(post.id === prevPost.id) {
                        return {...prevPost, title: title, body: body}
                    } else return prevPost
                })
            })

            setTitle("")
            setBody("")
            setIsEditingForm(false)
        }
    }

    return <div className="flex flex-col gap-4 item-start border border-pink-500 rounded p-2 m-4">
        <div className="font-bold text-lg">Edit Post</div>
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

        <button onClick={editPost} className="rounded bg-white font-bold text-pink-500 p-2 border border-pink-700">Edit Post</button>
    </div>
}