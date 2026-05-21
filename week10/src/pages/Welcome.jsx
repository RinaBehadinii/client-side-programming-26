import {useContext} from "react";
import {UserContext} from "../context/userContext.jsx";
import Greeting from "../components/welcome/Greeting.jsx";
import ProductList from "../components/welcome/ProductList.jsx";
import NoUserError from "../components/shared/NoUserError.jsx";

function Welcome() {
    const {user} = useContext(UserContext)

    if(!user) {
        return <NoUserError/>
    }

    return <div>
        <Greeting/>
        <ProductList/>
    </div>
}

export default Welcome;