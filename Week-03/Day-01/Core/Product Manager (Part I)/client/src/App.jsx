import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AllProducts from './components/AllProducts'

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
      </Routes>
    </>
  )
}

export default App
