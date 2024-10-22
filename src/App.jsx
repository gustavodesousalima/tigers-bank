import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './pages/Home';
import GoldEX from './pages/GoldEX';
import Footer from './componentes/Footer';
import SectionPrimary from './componentes/SectionPrimary';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename='/tigers-bank'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goldex" element={<GoldEX />} />
        <Route path="/sobre" element={<SectionPrimary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;