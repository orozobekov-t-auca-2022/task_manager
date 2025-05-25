import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) setTheme(storedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme === 'dark' ? 'dark' : '';
    }, [theme]);

    useEffect(() => {
        document.documentElement.className = theme === 'dark' ? 'dark' : '';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
