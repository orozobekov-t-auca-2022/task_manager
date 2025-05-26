import { configureStore } from '@reduxjs/toolkit'
import noteSlice from '../../components/Notes/model/noteSlice'
import themeSlice from '../../components/SwitchThemeButton/model/themeSlice'

export default configureStore({
  reducer: {
    notes: noteSlice,
    theme: themeSlice
  },
})