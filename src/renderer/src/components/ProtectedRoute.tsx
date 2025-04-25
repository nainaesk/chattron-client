import { useAppStore } from '@renderer/store'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
