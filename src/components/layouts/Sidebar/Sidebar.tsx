import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faFileAlt, // Resume Icon
//   faImage, // Images Icon
//   faTable, // Excel Icon
//   faScroll, // Forward Ref Icon
// } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/dashboard/resume">Resume</Link>
        </li>
        <li>
          <Link to="/dashboard/images">Images</Link>
        </li>
        <li>
          <Link to="/dashboard/excel">Excel Sheet</Link>
        </li>
        <li>
          <Link to="/dashboard/forward-ref">Forward Ref</Link>
        </li>
        <li>
          <Link to="/dashboard/custom-hooks">Custom Hooks</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
