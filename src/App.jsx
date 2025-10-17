import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


              <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="Home.jsx">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="About">About</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>    
      {/* <nav>

        <a href="Home.jsx"> Home</a>
        <br /><br />

        <a href="About.jsx">About</a>


      </nav> */}

      <h1>Hello sir</h1>
    
    </>
  )
}

export default App
