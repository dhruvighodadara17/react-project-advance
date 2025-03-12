import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router-dom'
import Loader from '@components/loader/Loader'

interface WithProfileDataProps {
  profileData: {
    profilePhoto: string
    username: string
    resume: string
  }
}

const WithProfileData = <P extends WithProfileDataProps>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ComponentWithProfileData: React.FC<Omit<P, keyof WithProfileDataProps>> = (props) => {
    const { user, loading } = useAppSelector((state) => state.auth)
    const navigate = useNavigate()
    const [profileData, setProfileData] = useState<WithProfileDataProps['profileData'] | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
      if (!user) {
        navigate('/login')
      } else {
        // Simulated Delay for Better UX
        setTimeout(() => {
          setProfileData({
            profilePhoto: user.profilePhoto || '/default-avatar.png',
            username: user.username,
            resume: user.resume || '',
          })
          setIsLoading(false) // ✅ Stop loading once data is ready
        }, 1000)
      }
    }, [user, navigate])

    if (isLoading || loading) {
      return <Loader /> // 🚀 Show Spinner While Data is Loading
    }

    if (!profileData) {
      return <p>Error fetching profile data. Please try again.</p>
    }

    return <WrappedComponent {...(props as P)} profileData={profileData} />
  }

  return ComponentWithProfileData
}

export default WithProfileData
