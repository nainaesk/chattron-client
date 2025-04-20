import { ChatMessage } from './ChatMessage'

export const ChatMessages = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <ChatMessage key={index} />
      ))}
    </div>
  )
}
