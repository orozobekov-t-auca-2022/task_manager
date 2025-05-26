import { createSlice } from '@reduxjs/toolkit'

const themes = {
    LIGHT: 'light',
    DARK: 'dark',
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: themes.LIGHT
    },
    reducers: {
        changeTheme: (state) => {
            state.theme = (state.theme === themes.LIGHT) ? themes.DARK : themes.LIGHT;
            localStorage.setItem('theme', state.theme);
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer