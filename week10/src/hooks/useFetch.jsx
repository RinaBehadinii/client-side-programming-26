import {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(true))
            .finally(() => setIsLoading(false))
    }, []);

    return {data, error, isLoading}
}