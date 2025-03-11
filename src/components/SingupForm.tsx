import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from '../utils/validationSchema'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { signupUser } from '../features/auth/authActions'

import styles from './SignupForm.module.css'

type SignupFormData = {
  username: string
  email: string
  password: string
  phone: string
  address: string
}

const SignupForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { error, loading, user } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormData) => {
    const result = await dispatch(signupUser(data))

    if (signupUser.fulfilled.match(result)) {
      alert('Signup successful! 🎉')
      navigate('/home')
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label>Username:</label>
          <input {...register('username')} placeholder="Enter your username" />
          {errors.username && <p className={styles.errorMessage}>{errors.username.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input {...register('email')} placeholder="Enter your email" />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input type="password" {...register('password')} placeholder="Enter your password" />
          {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Phone:</label>
          <input {...register('phone')} placeholder="Enter your phone number" />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Address:</label>
          <textarea {...register('address')} placeholder="Enter your address" />
          {errors.address && <p className={styles.errorMessage}>{errors.address.message}</p>}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {user && <p className={styles.successMessage}>Signup successful! 🎉</p>}
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <p className={styles.redirectText}>
          Already registered?{' '}
          <Link to="/login" className={styles.link}>
            Login here
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignupForm
