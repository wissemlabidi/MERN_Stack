import React, { useState } from 'react'
import someStyling from './Form.module.css'
const Form = (props) => {
    const [box, setBox] = useState({Color: "" })
    const createBox = (e)=>{
        e.preventDefault()
        props.addBox(box)
        setBox({Color: "" })
    }
    return (
        <fieldset>
            <legend>
                <h2>FORM</h2>
            </legend>
            <div className={someStyling.form}>
            <form onSubmit={createBox} >
                <p>Color  : <input
                    onChange={(e) => setBox({ ...box, Color: e.target.value })}
                    value={box.Color}
                    className={someStyling.input}
                /></p>
                <button className={someStyling.button}>Submit</button>
            </form>
            </div>
        </fieldset>
    )
}

export default Form