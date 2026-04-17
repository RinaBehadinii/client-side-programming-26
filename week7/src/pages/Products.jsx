import {Link} from "react-router";
import {useEffect, useState} from "react";

function Products() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
    }, []);

    console.log({products})

    if(!products) return <div>Loading...</div>


    return <div>
        <h1>The list of products:</h1>

        <ul>
            {
                products.map((product) => {
                    return <li key={product.id}>
                        <Link to={'/products/' + product.id}>{product.title}</Link>
                    </li>
                })
            }
        </ul>

    </div>
}

export default Products;