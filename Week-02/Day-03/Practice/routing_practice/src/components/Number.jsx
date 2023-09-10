import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (params) => {
    const {number} = useParams()
    
  return (
    <h1>Number = {number}</h1>
  )
}

export default Number