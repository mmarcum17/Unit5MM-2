import React from 'react'
import './App.css'
import Heading from './components/Heading/Heading'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'

import { useState } from 'react'

function App() {
 

  return (
    <div className="App">
      <Heading />
      <Homepage />
      <Footer />  
    </div>
  )
}

export default App
