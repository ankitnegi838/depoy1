import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>

        <a href="Home.jsx"> Home</a>
        <br /><br />

        <a href="About.jsx">About</a>


      </nav>

      <h1>Hello sir</h1>
    
    </>
  )
}

export default App
