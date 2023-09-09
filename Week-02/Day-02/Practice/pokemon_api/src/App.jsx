import { useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  const fetchAPI = ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then (response => response.json())
    .then (jsonResponse=>{
      console.log("Response From API : ",jsonResponse.results)
      setPokemon(jsonResponse.results) 
    })
    .catch(error=>console.log(error))
  }
  return (
    <>
      <fieldset>
          <h1>POKEMON API</h1>
          <button style={{backgroundColor:"blue" ,color:"white"}} onClick={fetchAPI}>Fetch The Pokemon</button>
          {}
            <ol>
              {pokemon.map((pokemon,idx)=>
                <li key={idx}>{pokemon.name}</li>
                )}
            </ol>
      </fieldset>
    </>
  )
}

export default App
