import {
  ChatListPanel,
  ChatView,
  Content,
  RootLayout,
  Sidebar,
  SideTabs,
  TabContainer
} from '@/components'
import { useAppStore } from '@renderer/store'
export const ChatPage = () => {
  const setOpenChatBubbleMenuId = useAppStore((state) => state.setOpenChatBubbleMenuId)
  const handleOutsideClick = () => {
    setOpenChatBubbleMenuId(null) // Close the menu when clicking outside
  }

  return (
    <RootLayout onClick={handleOutsideClick}>
      <TabContainer className="flex flex-col gap-4 py-12 px-2">
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
