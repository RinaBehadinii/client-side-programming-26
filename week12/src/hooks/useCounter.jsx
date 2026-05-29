import {useState} from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    function incrementCounter() {
        setCount(count + 1)
    }

    function decrementCounter() {
        setCount(count - 1)
    }

    return {
        count,
        incrementCounter,
        decrementCounter
    }
}