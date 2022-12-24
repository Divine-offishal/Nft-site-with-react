import React, { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Intro1 from './Components/Intro1'
import Intro2 from './Components/Intro2'
import Partners from './Components/Partners'
import Services from './Components/Services'
import Top from './Components/Top'
import Top2 from './Components/Top2'
import Footer from './Footer/Footer'
import IMAGES from "./Images/Images"
import Navbar from './Navbar/Navbar'
import Home from './Components/Pages/Home'
// import { IonIcon } from "@ionic/react"
// import { bowlingBallOutline } from "ionicons/icons"

function App() {
    const [selected, setSelected] = useState('')

  return (
    <div>
      <Navbar
        selected={selected}
        setSelected={setSelected}/>
      <Home 
        selected={selected}
        setSelected={setSelected}/>
      {/* <Hero
        selected={selected}
        setSelected={setSelected}/>
      <Intro1
        selected={selected}
        setSelected={setSelected}/>
      <Intro2
        selected={selected}
        setSelected={setSelected}/>
      <Top
        selected={selected}
        setSelected={setSelected}/>
      <Discover
        selected={selected}
        setSelected={setSelected}/>
      <Services
        selected={selected}
        setSelected={setSelected}/>
      <Top2
        selected={selected}
        setSelected={setSelected}/>
      <Partners
        selected={selected}
        setSelected={setSelected}/> */}
      <Footer
        selected={selected}
        setSelected={setSelected}/>
        
    </div>
  )
}

export default App
