import {useNavigate} from "react-router";
import {useContext} from "react";
import {PostsContext} from "../context/postsContext.jsx";

export function PostCard({post}) {
    const {setData} = useContext(PostsContext)
    const navigate = useNavigate()
    function goToPost() {
        navigate("/posts/" + post.id)
    }

    const onDelete = ()=> {
        setData((prevState) => {
            return prevState.filter((prevPost) => prevPost.id !== post.id)
        })
    }

    return <div className="border border-pink-500 bg-pink-200 p-2 m-2 rounded">
        <div className="text-lg font-bold text-red-700">{post.title}</div>
        <div className="text-md">{post.body}</div>
        <button onClick={goToPost} className="rounded bg-white font-bold text-pink-500 p-2 border border-pink-700">Go to POST</button>
        <button onClick={onDelete} className="rounded bg-white font-bold text-pink-500 p-2 border border-pink-700 ml-2">Delete</button>
    </div>
}