import React from 'react'
// import WithProfileData from 'hoc/withProfileData'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons' // ✅ Profile Icon
import SearchBox from '@components/features/SearchBox'
import WithProfileData from '../../../hoc/WithProfileData'

import styles from './Header.module.css'

interface HeaderProps {
  profileData: {
    profilePhoto: string
    username: string
  }
}

const Header: React.FC<HeaderProps> = ({ profileData }) => {
  return (
    <header className={styles.header}>
      <SearchBox />
      <div className={styles.profileInfo}>
        <img src={profileData.profilePhoto} alt="Profile" className={styles.profileImage} />
        <span className={styles.username}>{profileData.username}</span>
      </div>
    </header>
  )
}

export default WithProfileData(Header) // ✅ HOC-wrapped component
