import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  )
}

export default App
