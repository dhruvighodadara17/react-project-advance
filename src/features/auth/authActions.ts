import { createAsyncThunk } from '@reduxjs/toolkit'
import { signupApi } from '../../services/authService'

interface SignupData {
  username: string
  email: string
  password: string
  phone: string
  address: string
}
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData: SignupData, { rejectWithValue }) => {
    try {
      const response = await signupApi(userData)
      return response
    } catch (error) {
      return rejectWithValue((error as Error).message || 'An unknown error occurred')
    }
  },
)
