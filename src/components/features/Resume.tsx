import React from 'react'
import { useAppSelector } from '../../app/hooks'

const Resume: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth)

  if (!user?.resume) {
    return <p>No resume uploaded.</p>
  }

  return (
    <div>
      <h2>Your Uploaded Resume</h2>
      <iframe src={user.resume} width="100%" height="500px" title="User Resume"></iframe>
    </div>
  )
}

export default Resume
