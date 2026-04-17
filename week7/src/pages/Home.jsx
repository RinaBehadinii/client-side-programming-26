import {Link} from "react-router";

function Home() {
    return <div>
        <h1>This is the Home Page!!!</h1>

        <Link to="/about">Go to the About page!</Link>
    </div>
}

export default Home;