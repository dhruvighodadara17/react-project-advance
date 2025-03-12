import React from 'react'
import EditProfileForm from '@components/form/EditProfileForm/EditProfileForm'
import { useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router-dom'

// Import CSS (optional for layout)
import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  // Redirect to login if no user is logged in
  if (!user) {
    navigate('/login')
    return null
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.welcomeText}>Welcome, {user.username}! 👋</h1>
        <p className={styles.instructionText}>Edit your profile below:</p>
        <EditProfileForm />
      </div>
    </div>
  )
}

export default HomePage
