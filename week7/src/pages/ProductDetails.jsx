import {useParams} from "react-router";
import {useEffect, useState} from "react";

function ProductDetails() {
    const {id} = useParams()

    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/' + id)
            .then((response) => response.json())
            .then((data) => setCurrentProduct(data))
            .catch((error) => console.log(error))
    }, [])

    // const currentProduct = products.find((product) => product.id === Number(id))
    
    console.log({currentProduct})

    if(!currentProduct) return <div>Loading...</div>

    return <div>
        <h1>This is a Product Details page!</h1>

        <div>You are seeing the details of product {id}.</div>

        <div>Name: {currentProduct.title}</div>
        <div>Description: {currentProduct.description}</div>
        <div>Price: {currentProduct.price}</div>
    </div>
}

export default ProductDetails;