import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// Jag tog hjälp av ClaudeAI för att få förklarat hur context fungerar och vilka problem det löser
// Jag har tagit hjälp av dokumentationen för att förstå hur koden skall skrivas.
// använder denna i App.jsx för att skifta mellan light och dark mode, och styr den från themeToggle.jsx

function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    };

    useEffect( () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
        }
    }, [])

    return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};