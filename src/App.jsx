import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Navigation from './Config/Navigation'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Navigation/>
    <Footer/>
    
    </>
  )

  }
export default App 