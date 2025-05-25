import { configureStore } from '@reduxjs/toolkit'
import noteSlice from '../../components/Notes/slice/noteSlice'
import { themeSlice } from '../../components/SwitchThemeButton/config/themeSlice'

export default configureStore({
  reducer: {
    notes: noteSlice,
    theme: themeSlice
  },
})