import { useState } from 'react'
import Header from './componentes/Header'
import Home from './pages/Home'
import Footer from './componentes/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Footer />  
    </>
  )
}

export default App
