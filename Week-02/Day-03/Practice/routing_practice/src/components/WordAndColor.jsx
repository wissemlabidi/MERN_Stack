import React from 'react'
import { useParams } from 'react-router-dom'

const WordAndColor = () => {
    const { word } = useParams()
    const { col1 } = useParams()
    const { col2 } = useParams()
    
    return (
        <div>
            <h3 style={{ color:col1, backgroundColor:col2}}>Word = {word}</h3><br />
        </div>
    )
}

export default WordAndColor