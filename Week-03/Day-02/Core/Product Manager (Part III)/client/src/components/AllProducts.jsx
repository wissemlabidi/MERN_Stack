import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';

const AllProduct = (props) => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(serverResponse => {
                console.log(serverResponse.data)
                setProducts(serverResponse.data)
            })
            .catch(serverError => console.log(serverError))
    }, [])
    return (
        <fieldset>
            <legend> <h2>All Products</h2></legend>
            {products.map(product => <div key={product._id}>
                <p> <Link to={`/${product._id}`}>{product.title}</Link> </p>
            </div>)}
        </fieldset>

    )
}

export default AllProduct