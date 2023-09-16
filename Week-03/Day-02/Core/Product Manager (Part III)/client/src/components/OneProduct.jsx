import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";


const OneProduct = (props) => {

    const [product,setProduct] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[id])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((serverResponse) => {
                console.log('Server Response : ', serverResponse)
                navigate('/')
            })
            .catch((serverError) => {
                console.log('Server Error : ', serverError);
            })
    }

    const navigate = useNavigate();

  return (
    <fieldset>
        <legend>
            <h2>One Product</h2>
        </legend>
        {product&& <>
            <h2>Product Title : {product.title}</h2>
            <p>Product Price : {product.price}</p>
            <p>Product Description : {product.description}</p>
        </>}
        <hr />
        <div>
            <button style={{backgroundColor: 'blue',color:'white' }}>
            <Link to={`/`}             
            >Back Home</Link></button>
            <button style={{backgroundColor: 'blue',color:'white' }}>
            <Link to={`/${id}/edit`}             
            >Edit</Link></button>
            <button style={{backgroundColor: 'red',color:'white' }}
            onClick={() => deleteProduct(product._id)}
            >Delete</button>
        </div>
    </fieldset>
  )
}

export default OneProduct