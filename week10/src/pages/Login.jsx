import {useContext, useState} from "react";
import {UserContext} from "../context/userContext.jsx";
import {useNavigate} from "react-router";
import ErrorMessage from "../components/shared/ErrorMessage.jsx";
import ErrorModal from "../components/shared/ErrorModal.jsx";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const login = () => {
        //We assume that admin and admin are the correct credentials
        if(username === "admin" && password === "admin") {
            //Log in the user
            const newUser = {
                username: username,
                password: password
            }

            setUser(newUser)
            //Navigate to the Welcome page
            navigate("/welcome")
        } else {
            setError(true)
        }
    }

    return <div>
        <h1>The LOGIN page.</h1>

        <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        {/*{error && <ErrorMessage/>}*/}
        {error && <ErrorModal setError={setError}/>}
    </div>
}

export default Login;