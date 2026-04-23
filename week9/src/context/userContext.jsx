import {createContext, useState} from "react";

export const UserContext = createContext(null)

export function UserProvider({children}) {
    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const [user, setUser] = useState(initialValues)

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}



