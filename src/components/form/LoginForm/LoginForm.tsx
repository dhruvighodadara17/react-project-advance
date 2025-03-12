import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../../utils/validationSchema'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { loginUser } from '../../features/auth/authActions'

// Import CSS Module
import styles from './LoginForm.module.css'

type LoginFormData = {
  identifier: string // Username or Email
  password: string
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { error, loading, user } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    // dispatch(loginUser(data))
    // alert(`Welcome back! 🎉`)
    // navigate('/home')
    const result = await dispatch(loginUser(data))

    if (loginUser.fulfilled.match(result)) {
      // alert('Signup successful! 🎉')
      navigate('/home')
      // temparary comment
      // navigate('/dashboard')
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label>Username or Email:</label>
          <input {...register('identifier')} placeholder="Enter your username or email" />
          {errors.identifier && <p className={styles.errorMessage}>{errors.identifier.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input type="password" {...register('password')} placeholder="Enter your password" />
          {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}
        {user && <p className={styles.successMessage}>Login successful! 🎉</p>}

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
