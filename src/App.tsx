import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import SignupPage from '@pages/SIgnupPage'
import './styles/global.css'


const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <SignupPage />
    </div>
  </Provider>
)

export default App
