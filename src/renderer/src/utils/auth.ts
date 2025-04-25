import { UserState } from '@shared/auth.model'
import { redirect } from 'react-router-dom'

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration')

  if (!storedExpirationDate) return null

  const expirationDate = new Date(storedExpirationDate)
  const now = new Date()
  const duration = expirationDate.getTime() - now.getTime()

  return duration
}
export function getAuthToken() {
  const token = localStorage.getItem('token')

  if (!token) return null

  const tokenDuration = getTokenDuration()
  if (!tokenDuration) return null
  if (tokenDuration < 0) return 'EXPIRED'

  return token
}

export function getUserData() {
  const authUser = localStorage.getItem('authUser')

  if (!authUser) return null
  return JSON.parse(authUser) as UserState
}

export function tokenLoader(): { token: string | null; userData: UserState | null } {
  const token = getAuthToken()
  const userData = getUserData()
  return { token, userData }
}

export function checkAuthLoader() {
  const token = getAuthToken()

  if (!token) {
    return redirect('/login')
  }

  return null
}

export function clearAuthLocalStorage() {
  localStorage.removeItem('token')
  localStorage.removeItem('expiration')
  localStorage.removeItem('authUser')
}
