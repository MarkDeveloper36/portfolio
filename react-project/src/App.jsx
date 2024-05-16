import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App
