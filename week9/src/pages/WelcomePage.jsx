import {useContext} from "react";
import {UserContext} from "../context/userContext.jsx";

function WelcomePage() {
    const {user} = useContext(UserContext)

    return <div>
       <h1>Welcome!!!</h1>

        {
            user.username !== "" ?
                <div>
                <h2>Hi {user.username}, welcome to our page.</h2>

                <div>The email for this user is: {user.email}</div>
                </div> :
                <div>
                    <h2>There is no information for the user!</h2>
                </div>
        }


    </div>
}

export default WelcomePage;