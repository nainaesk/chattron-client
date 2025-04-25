import { DraggableTopBar } from '@/components'
import { ChatPage, Login, LoginAction, Register } from '@/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { checkAuthLoader } from './utils/auth'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <ChatPage />,
      errorElement: <div>Error</div>,
      loader: checkAuthLoader
    },
    {
      path: 'login',
      element: <Login />,
      action: LoginAction
    },
    {
      path: 'register',
      element: <Register />
    }
  ])
  return (
    <>
      <DraggableTopBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
