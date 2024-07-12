import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion.jsx'
import Random_colour_generator from './components/random_colour_generator.jsx'
import Star_rating from './components/star_rating.jsx'
import Image_slider from './components/image_slider.jsx'
import Load_more from './components/load_more.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Accordion/>
    <Random_colour_generator/>
    <Star_rating/>
    <Image_slider/>
    <Load_more/>
    </>
  )
}

export default App
