import { DraggableTopBar } from '@/components'
import { ChatPage, Login } from '@/pages'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      {/* Based on user logged in oor not i should view either login page or if logged in I should  */}
      <ChatPage />
      <Login />
    </>
  )
}

export default App
