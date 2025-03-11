import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import SignupPage from '@pages/SignupPage'
import LoginPage from '@pages/LoginPage'
import SignupPage from '@pages/SIgnupPage'
import HomePage from '@pages/HomePage'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
