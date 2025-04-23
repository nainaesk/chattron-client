import { ChatMessage } from '@/components'
import { ChatMessagesMock } from '@shared/mock/ChatMessages'
import { ConversationItem } from '@shared/models'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const ChatMessages = ({ className, ...props }: ComponentProps<'div'>) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const messages: ConversationItem[] = ChatMessagesMock
  const [containerHeight, setContainerHeight] = useState<number | null>(null) // State to store the height

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.getBoundingClientRect().height // Get the height
      setContainerHeight(height) // Store the height in state
      console.log('ChatMessages container height:', height) // Log the height
    }
  }, [])

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
