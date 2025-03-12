import React from 'react'
import styles from './Loder.module.css'

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p>Loading data, please wait...</p>
    </div>
  )
}

export default Loader
