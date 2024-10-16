import { useState } from 'react';

import ThemeToggle from '../themeToggle/themeToggle';
import './navbar.css';

import mainLogo from './top-logo.svg';

function Navbar({toggleDarkMode}) {
    const [isMenuHidden, setIsMenuHidden] = useState(true);

    const showMenu = () => {
        setIsMenuHidden(!isMenuHidden);
    }

    return (
        <div className="navbar container">
            <a href="/" className="header-top-logo">
                <img src={mainLogo} alt="Silicon Logotype" />
                <h3>Silicon</h3>
            </a>
            <nav className={`${isMenuHidden ? "hidden" : ""}`}>
                <a href="/">Features</a>
                <a href="/contact">Contact</a>
            </nav>
            
            <ThemeToggle toggleDarkMode={toggleDarkMode} />
            
            <a id="auth-login" className="btn-primary" href="#Subscribe">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>
            <button className="btn-mobile" onClick={showMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    )
}

export default Navbar;