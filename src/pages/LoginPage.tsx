import React from 'react'
import LoginForm from '../components/form/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
import styles from '@components/form/LoginForm/LoginForm.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <LoginForm />

        <p className={styles.redirectText}>
          Don't have an account?{' '}
          <Link to="/" className={styles.link}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
