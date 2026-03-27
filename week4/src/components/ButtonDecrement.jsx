function ButtonDecrement({setCount}) {
    return <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>

}

export default ButtonDecrement;