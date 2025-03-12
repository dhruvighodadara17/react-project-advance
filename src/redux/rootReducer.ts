import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice'
import searchReducer from '../components/features/search/searchSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
})

export default rootReducer
