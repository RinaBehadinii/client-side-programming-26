import {Route, Routes} from "react-router";
import Login from "../pages/Login.jsx";
import Welcome from "../pages/Welcome.jsx";
import {UserProvider} from "../context/userContext.jsx";

function AppRoutes() {
    return <UserProvider>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
    </UserProvider>
}

export default AppRoutes;