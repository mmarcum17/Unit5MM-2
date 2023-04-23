import React from 'react'
import './App.css'
import Heading from './components/Heading'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

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
