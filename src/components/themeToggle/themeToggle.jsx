// import {useState} from 'react';

import './themeToggle.css';

function ThemeToggle({toggleDarkMode}) {
    // const [theme, setTheme] = useState("");

    // const toggleDarkMode = () => {
    //     console.log("clickety");
    //     document.querySelector("#root").classList.toggle("clr-dark");
    // }

    return (
        <div className="theme-toggle">
            <span className="label">Dark Mode</span>
            <label htmlFor="darkmode-switch" className="switch" aria-label="color theme switch">
                <input id="darkmode-switch" type="checkbox" onClick={toggleDarkMode} />
                <span></span>
            </label>
        </div>
    )
}

export default ThemeToggle;