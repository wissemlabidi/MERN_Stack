import './App.css'
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import WordAndColor from './components/WordAndColor'

function App() {


  return (
    <>
      <legend><h1>Routing Practice</h1></legend>
        <Routes>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/:number'} element={<Number/>}/>
          <Route path={'/:word'} element={<Word/>}/>
          <Route path={'/:word/:col1/:col2'} element={<WordAndColor/>}/>
        </Routes>
    </>
  )
}

export default App
