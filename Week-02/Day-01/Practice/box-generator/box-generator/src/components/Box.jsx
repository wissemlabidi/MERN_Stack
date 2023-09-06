import React from 'react'
import './Box.css'

const Box = ({box}) => {
  return (
    <fieldset>
        <legend>
        <h2>BOX</h2>
        </legend>
        <div className="box-container">
        {box.map((box, id)=><div key={id} className='box' style= {{backgroundColor:box.Color}}>
        </div>)}
        </div>
    </fieldset>
  )
}

export default Box