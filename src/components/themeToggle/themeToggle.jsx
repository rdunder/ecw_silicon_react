import {useContext, useRef} from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './themeToggle.css';

function ThemeToggle() {
    const {toggleDarkMode, isDarkMode} = useContext(ThemeContext);

    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div className="theme-toggle">
            <span className="label">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            <label htmlFor="darkmode-switch" className="switch" aria-label="color theme switch">
                <input id="darkmode-switch" type="checkbox" onClick={handleClick} />
                <span></span>
            </label>
        </div>
    )
}

export default ThemeToggle;