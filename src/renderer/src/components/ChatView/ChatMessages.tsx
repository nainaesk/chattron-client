import { ChatMessage } from '@/components'
import { useAppStore } from '@renderer/store'
import { ChatMessagesMock } from '@shared/mock/ChatMessages'
import { ConversationItem } from '@shared/models'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const ChatMessages = ({ className, ...props }: ComponentProps<'div'>) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const messages: ConversationItem[] = ChatMessagesMock
  const [containerHeight, setContainerHeight] = useState<number | null>(null) // State to store the height

  const selectedChatId = useAppStore((state) => state.selectedChatId)

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.getBoundingClientRect().height // Get the height
      setContainerHeight(height) // Store the height in state
      console.log('ChatMessages container height:', height) // Log the height
    }
  }, [])

  if (!selectedChatId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <svg
          className="w-16 h-16 animate-pulse text-accent-alt"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm0 18a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z" />
        </svg>
        <p className="mt-4 text-lg font-semibold text-gray-500">
          Select a chat to start a conversation
        </p>
      </div>
    )
  }

  return (
    <div
      className={twMerge('px-4 flex flex-col gap-4 flex-1 overflow-y-auto', className)}
      ref={containerRef}
      {...props}
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} {...message} containerHeight={containerHeight} />
      ))}
    </div>
  )
}
