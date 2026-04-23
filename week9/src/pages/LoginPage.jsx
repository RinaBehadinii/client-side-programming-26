import {useContext, useState} from "react";
import {UserContext} from "../context/userContext.jsx";
import {useNavigate} from "react-router";

function LoginPage() {
     const {setUser} = useContext(UserContext)

     const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)

    function login () {
        //We assume that the correct credentials are username: admin and password: admin

        if(username === "admin" && password === "admin") {
            //Create the new user object
            const newUser = {
                username: username,
                email: email,
                password: password
            }

            //Login the user
            setUser(newUser)

            //Navigate the user to the Welcome page
            navigate("/welcome")
        } else {
            //Show an error
            setError(true)
        }
    }

    return <div>
        <h1>This is the login page!</h1>

        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        {
            error && <div>You have inputted the wrong credentials. Try again!</div>
        }
    </div>
}

export default LoginPage;