import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';

export default function App() {
  return (
    <div>
        <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Menu />} />
      </Routes>
    </div>

  );
}