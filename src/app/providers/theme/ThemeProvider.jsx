import { ThemeContext } from './themeContext';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../components/SwitchThemeButton/model/themeSlice';
import { themeList } from '../../../components/SwitchThemeButton/model/themeList';
import { useEffect } from 'react';

export const ThemeProvider = ({ children }) => {
    const themeSelector = useSelector(theme => theme.theme);
    const themeDispatch = useDispatch();

    useEffect(() => {
        document.documentElement.className = themeSelector.theme === themeList.DARK ? 'dark' : '';
    }, [themeSelector])

    const toggleTheme = () => {
        themeDispatch(changeTheme());
    };

    return (
        <ThemeContext.Provider value={{ themeSelector, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
