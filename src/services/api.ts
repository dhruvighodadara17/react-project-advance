import axios from 'axios'

// Create an Axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000', // Base URL for JSON Server
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
