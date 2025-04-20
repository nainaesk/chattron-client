import { Content, DraggableTopBar, RootLayout, Sidebar, TabContainer } from '@/components'
import { FaRegMessage } from 'react-icons/fa6'
import { GoHash } from 'react-icons/go'
import { GrGroup } from 'react-icons/gr'
import { ButtonIcon } from './components/Buttons/ButtonIcon'
import { ChatListPanel } from './components/ChatList/ChatListPanel'
import { ChatView } from './components/ChatView/ChatView'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <TabContainer className="flex flex-col gap-4 items-center py-12 px-2">
          <ButtonIcon ButtonIcon={FaRegMessage} />
          <ButtonIcon ButtonIcon={GrGroup} isActive />
          <ButtonIcon ButtonIcon={GoHash} noOfNotifications={3} />
        </TabContainer>
        <Sidebar className="py-12 px-4">
          <ChatListPanel />
        </Sidebar>
        <Content>
          <ChatView />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
