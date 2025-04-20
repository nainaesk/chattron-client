import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { ChatMessages } from './ChatMessages'

export const ChatView = () => {
  return (
    <div className="flex flex-col">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  )
}
