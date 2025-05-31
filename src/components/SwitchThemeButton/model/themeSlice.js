import { createSlice } from '@reduxjs/toolkit'
import { themeList } from './themeList';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: localStorage.getItem('theme') || themeList.LIGHT
    },
    reducers: {
        changeTheme: (state) => {
            state.theme = (state.theme === themeList.LIGHT) ? themeList.DARK : themeList.LIGHT;
            localStorage.setItem('theme', state.theme);
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer