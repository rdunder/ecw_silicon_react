import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';

import Index from "./pages/index";
import Contact from "./pages/contact";

import './fonts.css'
import './variables.css'
import './index.css'
import './themes.css'
import './App.css'

function App() {
  const {isDarkMode} = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "clr-dark" : "clr-light"} app`}>
      <Router>
            <Routes>
                <Route path="/" element={< Index />} />
                <Route path="/contact" element={< Contact />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
