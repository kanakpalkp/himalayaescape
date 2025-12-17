import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Nav1 from './components/Nav1'
import { Maincard } from './components/Maincard'
import Carousel from './components/Carousel'
import { assets } from './assets/assets'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Services from './components/Services'
import Home from './components/Home'
import { Card } from '@material-tailwind/react'
import Cards from './components/Cards'
import Package from './components/Package'
import Destination from './components/Destination'
import Grid from './components/Grid'
import Contact from './components/Contact'



function App() {

  return (
    <>


      <Navbar />

      <div id="home"><Home/></div>
      <Cards/>
      
      <div id="services"><Services /></div>
      <div id="destinations"><Destination/></div>
      <Package/>
      <Maincard />
      <div id="contact"><Contact/></div>

      
      {/* <Grid/> */}
      {/* <Carousel />
      <Login /> */}
      

      {/* <Nav1/> */}
      {/*  */}
      {/* <Navbar/>
   <Carousel />  */}

        </>
  )
}

export default App
