import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/listSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})