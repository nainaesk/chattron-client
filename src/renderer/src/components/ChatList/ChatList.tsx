import { ChatListItem } from './ChatListItem'

export const ChatList = () => {
  const chatList = [1, 2, 3, 4, 5]
  return (
    <div className="flex flex-col">
      {chatList.map((item) => (
        <ChatListItem key={item} />
      ))}
    </div>
  )
}
