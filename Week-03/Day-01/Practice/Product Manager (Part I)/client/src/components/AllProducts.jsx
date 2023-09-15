import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllProduct = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(serverResponse => {
                console.log(serverResponse.data, "✅✅✅")
                setProducts(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "❌❌❌"))
    }, [])
    return (
        <fieldset>
            <legend> <h2>All Products</h2></legend>
            {products.map(product => <div key={product._id}>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>)}
        </fieldset>

    )
}

export default AllProduct