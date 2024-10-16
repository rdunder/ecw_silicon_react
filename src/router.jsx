import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/index";
import Contact from "./pages/contact";


function MainRoutes() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default MainRoutes;