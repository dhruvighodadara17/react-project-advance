import api from './api'

interface SignupData {
  username: string
  email: string
  password: string
  phone: string
  address: string
}

interface LoginData {
  identifier: string // Username or email
  password: string
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
// LOGIN: Verify User Credentials
export const loginApi = async (loginData: LoginData) => {
  const { data: users } = await api.get('/users')

  const foundUser = users.find(
    (user: SignupData) =>
      (user.username === loginData.identifier || user.email === loginData.identifier) &&
      user.password === loginData.password,
  )

  if (!foundUser) {
    throw new Error('Invalid username, email, or password')
  }

  return foundUser
}

//update profile

export const updateProfileApi = async (userId: number, formData: FormData) => {
  const response = await api.patch(`/users/${userId}`, formData)
  return response.data
}
