import { ChatListItemStatus } from '@shared/models'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChatMessage } from './ChatMessage'

export const ChatMessages = ({ className, ...props }: ComponentProps<'div'>) => {
  const messages: {
    message: string
    messageTime: string
    messageStatus: ChatListItemStatus
    senderName: string
    senderImage: string
    isSenderUser: boolean
  }[] = [
    {
      message: 'Hey, how are you?',
      messageTime: '10:30 AM',
      messageStatus: 'seen',
      senderName: 'Alice',
      senderImage: '/path/to/alice.jpg',
      isSenderUser: false
    },
    {
      message: 'I’m good, thanks! How about you? I have been thinking about food a lately.',
      messageTime: '10:32 AM',
      messageStatus: 'delivered',
      senderName: 'You',
      senderImage: '/path/to/your-image.jpg',
      isSenderUser: true
    },
    {
      message: 'I’m doing great! Are we still on for today?',
      messageTime: '10:35 AM',
      messageStatus: 'sent',
      senderName: 'Alice',
      senderImage: '/path/to/alice.jpg',
      isSenderUser: false
    },
    {
      message: 'Yes, absolutely! Looking forward to it.',
      messageTime: '10:40 AM',
      messageStatus: 'seen',
      senderName: 'You',
      senderImage: '/path/to/your-image.jpg',
      isSenderUser: true
    }
  ]
  return (
    <div className={twMerge('px-4 flex flex-col gap-4', className)} {...props}>
      {messages.map((message) => (
        <ChatMessage key={message.message} {...message} />
      ))}
    </div>
  )
}
