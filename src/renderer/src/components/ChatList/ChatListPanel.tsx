import { ChatList } from './ChatList'
import { SearchChatInput } from './SearchChatInput'

export const ChatListPanel = () => {
  return (
    <div className="flex flex-col">
      <SearchChatInput />
      <ChatList />
    </div>
  )
}
