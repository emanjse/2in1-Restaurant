import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>

  );
}