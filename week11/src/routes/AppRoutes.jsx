import {Route, Routes} from "react-router";
import {WelcomePage} from "../pages/WelcomePage.jsx";
import {PostsPage} from "../pages/PostsPage.jsx";
import {SinglePost} from "../pages/SinglePost.jsx";
import {PostsContextProvider} from "../context/postsContext.jsx";

export function AppRoutes() {
    return <PostsContextProvider>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/posts/:id" element={<SinglePost/>}/>
            </Routes>
    </PostsContextProvider>

}