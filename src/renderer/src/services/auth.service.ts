import { LoginRequest, LoginResponse } from '@shared/auth.model'
// import axios from 'axios'

// const API_BASE_URL = 'https://your-api-url.com'

// Function to handle login API call
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  // const response = await axios.post(`${API_BASE_URL}/login`, data)
  // return response.data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock-jwt-token',
        user: {
          id: '123',
          name: 'John Doe',
          email: data.email
        },
        expiration: new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hour from now
      })
    }, 1000) // Simulate 1 second delay
  })
}
export const register = async (data: LoginRequest): Promise<LoginResponse> => {
  // const response = await axios.post(`${API_BASE_URL}/register`, data)
  // return response.data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock-jwt-token',
        user: {
          id: '456',
          name: 'Jane Doe',
          email: data.email
        },
        expiration: new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hour from now
      })
    }, 1000) // Simulate 1 second delay
  })
}
