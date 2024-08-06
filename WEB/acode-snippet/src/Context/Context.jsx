import React, { useContext, createContext, useState } from 'react';

// Initial values for the theme context


// Create the ThemeContext with default values
export const ThemeContext = createContext();

// Create a provider component

// export const ThemeProvider = ThemeContext.Provider
export const ThemeProvider = ({ children }) => {
    const [thememode, setThememode] = useState(true);

    return (
        <ThemeContext.Provider value={{ thememode, setThememode}}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export default function useTheme() {
    return useContext(ThemeContext);
}
