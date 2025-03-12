import { createAsyncThunk } from '@reduxjs/toolkit'
import { updateProfileApi, signupApi, loginApi } from '../../../services/authService'
// import { File } from 'buffer'

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

// import {  } from '../../services/authService'

interface LoginData {
  identifier: string
  password: string
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const user = await loginApi(loginData)
      return user
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Invalid credentials')
    }
  },
)

//update user profile

// interface formData {
//   // profilePhoto: File
//   // password: string
// }

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ userId, formData }: { userId: number; formData: FormData }, { rejectWithValue }) => {
    try {
      const updatedUser = await updateProfileApi(userId, formData)
      return updatedUser
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to update profile')
    }
  },
)
