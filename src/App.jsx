import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + DPCLER hey, what i have to do. </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque!</p>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam nesciunt animi! Ducimus debitis mollitia quos nam tempora voluptatibus possimus.</p>
    </>
  )
}

export default App
