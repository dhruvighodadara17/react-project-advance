import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signupUser, loginUser } from './authActions'

interface AuthState {
  user: {
    id: number | undefined // ✅ Add this line
    username: string
    email: string
  } | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<AuthState['user']>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Login Logic
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthState['user']>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default authSlice.reducer
