import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calculator from './Components/Calculator'
import TicTacToe from './Components/TicTacToe'

function App() {
  return (
    <Router basename='/portfolio'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
