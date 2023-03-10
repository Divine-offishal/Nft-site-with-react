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
import PageRoutes from './Routes/Routes'
import { useEffect } from 'react'
import { Route, Navigate, useNavigate, Routes } from 'react-router-dom'
import Signup from "./Components/Pages/Forms/Signup";
import "react-toastify/dist/ReactToastify.css"




function App() {
    const [selected, setSelected] = useState('')
    const [clicked, setClicked] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
      <Navigate replace to="/signin"/>
    }, [])

  return (
    <>
    <div className="overflow-hidden">
      {/* <Navbar
        selected={selected}
        setSelected={setSelected}
        clicked={clicked}
        setClicked={clicked}/> */}
      {/* <Home 
        selected={selected}
        setSelected={setSelected}/> */}
      <PageRoutes
        selected={selected}
        setSelected={setSelected}
        clicked={clicked}
        setClicked={setClicked}/>
      {/* <Footer
        selected={selected}
        setSelected={setSelected}/> */}
        
    </div>
    </>
  )
}

export default App
