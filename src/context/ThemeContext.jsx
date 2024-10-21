import { createContext, useState } from "react";

const ThemeContext = createContext();


function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    };

    return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};