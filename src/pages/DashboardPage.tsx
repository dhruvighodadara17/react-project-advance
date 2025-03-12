import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Header = lazy(() => import('../components/layouts/Header/Header'))
const Sidebar = lazy(() => import('../components/layouts/Sidebar/Sidebar'))
const Resume = lazy(() => import('@components/features/Resume'))
const Images = lazy(() => import('../components/features/Images'))
const ExcelSheet = lazy(() => import('../components/features/ExcelSheet'))
const ProductDetails = lazy(() => import('@components/features/ModalExample'))
const Loader = lazy(() => import('@components/loader/Loader'))
const CustomHooksExample = lazy(() => import('@components/features/CustomHooksExample')) // ✅ New Import

import { useAppSelector } from '../app/hooks'

import styles from './DashboardPage.module.css'

const DashboardPage: React.FC = () => {
  const { loading } = useAppSelector((state) => state.auth) // ✅ Track Loading State
  const [isTransitioning, setIsTransitioning] = useState(true) // ✅ New Transition State

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setIsTransitioning(false), 1500) // ✅ 1.5s delay for smooth effect
    }
  }, [loading])

  if (loading) return <Loader />
  return (
    <Suspense fallback={<Loader />}>
      {/* ✅ Show Loader while components load */}
      <div className={styles.dashboardContainer}>
        <Header />
        <div className={styles.mainContent}>
          <Sidebar />
          <div className={styles.contentArea}>
            <Routes>
              <Route path="resume" element={<Resume />} />
              <Route path="images" element={<Images />} />
              <Route path="excel" element={<ExcelSheet />} />
              <Route path="forward-ref" element={<ProductDetails />} /> {/* ✅ New Route */}
              <Route path="custom-hooks" element={<CustomHooksExample />} /> {/* ✅ New Route */}
            </Routes>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default DashboardPage
