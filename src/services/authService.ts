import api from './api'

interface SignupData {
  username: string
  email: string
  password: string
  phone: string
  address: string
}

// POST: Create a New User
export const signupApi = async (userData: SignupData) => {
  const { data: existingUsers } = await api.get('/users')

  const isEmailTaken = existingUsers.some((user: SignupData) => user.email === userData.email)

  if (isEmailTaken) {
    throw new Error('Email is already registered')
  }

  const response = await api.post('/users', userData)
  return response.data
}

// GET: Fetch All Users
export const getUsersApi = async () => {
  const response = await api.get('/users')
  return response.data
}
