import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice'
import searchReaducer from '../components/features/search/searchSlice'
import imageReducer from '../components/features/images/imageSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReaducer,
    images: imageReducer,
  },
})

// Type for dispatch
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
