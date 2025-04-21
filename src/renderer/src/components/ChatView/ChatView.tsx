import { ChatHeader, ChatInput, ChatMessages } from '@/components'

export const ChatView = () => {
  return (
    <>
      <ChatHeader />
      <ChatMessages className="flex flex-col flex-1" />
      <ChatInput />
    </>
  )
}
