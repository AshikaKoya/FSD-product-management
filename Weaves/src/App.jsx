import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <h1>WEAVES</h1>
     <Routes>
        <Route path="/a" element={<Add />} ></Route>
        <Route path="/h" element={<Home />} ></Route >
      </Routes>
    </>
  )
}

export default App
