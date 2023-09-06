import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Box from './components/Box'

function App() {
  const [box, setBox] = useState([])
  const addBox = (newBox) => {
    console.log("NEW Box FROM FORM.jsx TO APP.jsx ", newBox);
    setBox([...box,newBox])
  }
  return (
    <>
      <fieldset>
        <legend><h1> BOX GENERATOR </h1></legend>
        <Form addBox={addBox} />
        <Box box={box}/>
      </fieldset>
    </>
  )
}

export default App
