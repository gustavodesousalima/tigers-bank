import { useState } from 'react'
import Header from './componentes/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    </>
  )
}

export default App
