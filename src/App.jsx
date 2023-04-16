import { useState } from 'react'
import './App.css'
import Heading from './Heading'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Heading />
        
    </div>
  )
}

export default App
