import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  const axiosAPI = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => {
      console.log("AXIOS RESPONSE :",response.data.results)
      setPokemon(response.data.results)
    })
    .catch(error => console.log(error))
  }

  return (
    <>
      <fieldset>
          <h1>AXIOS POKEMON API</h1>
          <button style={{backgroundColor:"blue" ,color:"white"}} onClick={axiosAPI}>Fetch The Pokemon</button>
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
