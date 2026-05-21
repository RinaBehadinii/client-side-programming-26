import {useContext} from "react";
import {UserContext} from "../../context/userContext.jsx";

function Greeting() {
    const {user} = useContext(UserContext)

    return <>
        <h1>The WELCOME page.</h1>

        <div>Hi {user.username}!</div>
    </>
}

export default Greeting;