import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = (props) => {
    const [product, setProduct] = useState({ title: "", price: "", description: "" })
    const fromHandler = (e) => {
        e.preventDefault()
        console.log("SUBMITTED PRODUCT : ", product);
        axios.post("http://localhost:8000/api/products", product)
            .then(serverResponse => console.log(serverResponse))
            .catch(serverError => console.log(serverError))
        setProduct({ title: "", price: "", description: "" })
    }
    return (
        <fieldset>
            <legend> <h2>AddProduct</h2></legend>
            
            <form onSubmit={fromHandler}>
                <p>Title  : <input type="text"
                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    value={product.title}
                /></p>
                <p>Price : <input type="text"
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    value={product.price}
                /></p>
                <p>Description : <input type="text"
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    value={product.description}
                /></p>
                <button style={{ backgroundColor: 'blue',color:'white' }}>Submit</button>
            </form>
        </fieldset>

    )
}

export default AddProduct