import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'

function App() {
  const [product, setProduct] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <AddProduct />
            <br />
            <AllProducts />
          </>
        } />
        <Route path='/:id' element={<OneProduct />} />
        <Route path='/:id/edit' element={<EditProduct/>} />
      </Routes>
    </>
  )
}

export default App
