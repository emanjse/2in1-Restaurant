import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import BookTable from './pages/BookTable';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';



export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="BookTable" element={<BookTable />} />
      </Routes>
      <Footer/>
    </div>

  );
}