import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/HomeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})