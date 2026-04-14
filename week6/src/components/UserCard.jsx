function UserCard ({user}) {
    return <div >
        <span>{user.name} - </span>
        <span>{user.username} - </span>
        <span>{user.email} - </span>
        <span>{user.website}</span>
    </div>
}

export default UserCard;