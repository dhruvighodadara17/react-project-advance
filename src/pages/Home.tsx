import Button from '@components/Button'
import React from 'react'

const Home: React.FC = () => {
  // console.log(1=="1");
  return (
    <div>
      <h1>🏠 Welcome to the Home Page!</h1>
      <p>Explore the site and enjoy your journey.</p>
      <Button label="Click Me!" onClick={() => alert('clicked')} />
    </div>
  )
}

export default Home

// import React from 'react'

// const Home: React.FC = () => {
//   return (
//     <div>
//       <h1>🌍 Environment-Based URL Example</h1>
//       <p>API Base URL: {import.meta.env.VITE_API_BASE_URL}</p>
//     </div>
//   )
// }

// export default Home
