import {
  ChatListPanel,
  ChatView,
  Content,
  RootLayout,
  Sidebar,
  SideTabs,
  TabContainer
} from '@/components'
export const ChatPage = () => {
  return (
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
  )
}
