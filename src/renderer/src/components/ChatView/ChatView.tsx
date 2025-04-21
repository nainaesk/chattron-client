import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { ChatMessages } from './ChatMessages'

export const ChatView = () => {
  return (
    <>
      <ChatHeader />
      <ChatMessages className="flex flex-col flex-1" />
      <ChatInput />
    </>
  )
}
