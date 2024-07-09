import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion.jsx'
import Random_colour_generator from './components/random_colour_generator.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Accordion/>
    <Random_colour_generator/>
    </>
  )
}

export default App
