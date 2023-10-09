import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './Slices/HomeSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})