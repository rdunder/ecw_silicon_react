import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import Index from "./pages/index";
import Contact from "./pages/contact";

import './fonts.css'
import './variables.css'
import './index.css'
import './themes.css'
import './App.css'

function App() {
  const [ isDarkMode, setIsDarkMode] = useState(false);

  /**Function to handle theme toggling between dark and light
   * 
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`${isDarkMode ? "clr-dark" : "clr-light"} app`}>
      <Router>
            <Routes>
                <Route path="/" element={<Index toggleDarkMode={toggleDarkMode} />} />
                <Route path="/contact" element={<Contact toggleDarkMode={toggleDarkMode} />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
