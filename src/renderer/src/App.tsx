import { Content, DraggableTopBar, RootLayout, Sidebar, TabContainer } from '@/components'

import { ChatListPanel } from './components/ChatList/ChatListPanel'
import { ChatView } from './components/ChatView/ChatView'
import { SideTabs } from './components/SideTabs'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <TabContainer className="flex flex-col gap-4 items-center py-12 px-2">
          <SideTabs />
        </TabContainer>
        <Sidebar className="flex flex-col py-6 px-2">
          <ChatListPanel />
        </Sidebar>
        <Content className="flex flex-col pb-2 px-4">
          <ChatView />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
