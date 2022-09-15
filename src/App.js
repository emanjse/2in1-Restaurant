import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';



export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
      </Routes>
      <Footer/>
    </div>

  );
}