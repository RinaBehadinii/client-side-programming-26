import {useEffect, useState} from "react";
import UserCard from "./UserCard.jsx";

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=> response.json())
            .then((data) => {
                setLoading(false)
                setUsers(data)
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
                console.log(error)
            })
    }, [])

    console.log({users})

    if(loading) return <div>Loading...</div>
    if(error) return <div>An error occurred: {error}</div>

    return <div>
        {
            users.map((user) => {
                return <UserCard key={user.id} user={user}/>
            })
        }
    </div>
}

export default UserList;