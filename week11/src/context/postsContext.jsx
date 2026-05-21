import {createContext, useEffect, useState} from "react";
import {POSTS_API} from "../api/constants.js";

export const PostsContext = createContext(null)

export function PostsContextProvider({children}) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(POSTS_API)
            .then((response) => response.json())
            .then((responseData) => setData(responseData))
    }, []);

    return <PostsContext.Provider value={{data, setData}}>
        {children}
    </PostsContext.Provider>
}