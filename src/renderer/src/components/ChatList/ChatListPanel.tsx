import { ChatList, SearchChatInput } from '@/components'
import { useAppStore } from '@renderer/store'

export const ChatListPanel = () => {
  const activeTab = useAppStore((state) => state.activeTab)
  return (
    <>
      <h3 className="mb-4">
        {activeTab === 'dm' ? 'Messages' : activeTab === 'group' ? 'Groups' : 'Channels'}
      </h3>
      <SearchChatInput className="mb-2" />
      <ChatList className="flex flex-1" />
    </>
  )
}
