import {Link} from "react-router";

function NotFound() {
    return <div>
        <h1>THE PAGE IS NOT FOUND!</h1>

        <Link to="/">Go back to Home page.</Link>
    </div>
}

export default NotFound