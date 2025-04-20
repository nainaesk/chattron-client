import { ChatList } from './ChatList'
import { SearchChatInput } from './SearchChatInput'

export const ChatListPanel = () => {
  return (
    <>
      <h3 className="mb-4">Messages</h3>
      <SearchChatInput className="mb-2" />
      <ChatList className="flex flex-1" />
    </>
  )
}
