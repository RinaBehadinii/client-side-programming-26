import {useEffect, useState} from "react";
import {API} from "../../api/constants.js";
import {isPrice50orLess} from "../../utils/commonUtils.js";
import {useFetch} from "../../hooks/useFetch.jsx";
import Loading from "../shared/Loading.jsx";
import ErrorMessage from "../shared/ErrorMessage.jsx";

function ProductList() {
    const {data, error, isLoading} = useFetch(API)

    if(isLoading) {
        return <Loading/>
    }

    if(error) {
        return <ErrorMessage/>
    }

    return <>
        <h2>List of Products</h2>
        {
            data.map((product) => {
                return <div key={product.id}>
                    <span>{product.title} - </span>
                    <span>{isPrice50orLess(product)}</span>
                </div>
            })
        }
    </>
}

export default ProductList;