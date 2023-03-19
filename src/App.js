import React from 'react'
import './App.css'
import Header from './components/header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Clients from './pages/Clients'
import Shop from './pages/Shop'
import Contact from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Clients" element={<Clients/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App