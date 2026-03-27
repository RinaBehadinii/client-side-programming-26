function ButtonIncrement({setCount}) {
    return <button onClick={() =>
        setCount((prevCount) => prevCount + 1)}>
        Increment</button>

}

export default ButtonIncrement;