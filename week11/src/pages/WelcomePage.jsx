import {Link} from "react-router";

export function WelcomePage() {
    return <div>
        <h1 className="text-red-500">This is the WELCOME page!</h1>

        <Link to="/posts">Go to POSTS!</Link>
    </div>
}