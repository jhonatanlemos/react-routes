import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Layout from './pages/Layout'
import ProductPage from './pages/ProductPage'


function App() {
  return (
    <Router>

      <Routes>

          <Route path="/" element={<Layout />}/> 
          <Route path="product" element={<ProductPage />}/> 
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      
      </Routes>

    </Router>
  )
}

export default App
