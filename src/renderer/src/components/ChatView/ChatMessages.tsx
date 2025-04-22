import { ChatMessage } from '@/components'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const ChatMessages = ({ className, ...props }: ComponentProps<'div'>) => {
  const messages: {
    message: string
    messageTime: string
    senderName: string
    isSenderUser: boolean
  }[] = [
    {
      message: 'Hey, how are you?',
      messageTime: '10:30AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      message: 'I’m good, thanks! How about you? I have been thinking about food a lately.',
      messageTime: '10:32 AM',
      senderName: 'You',

      isSenderUser: true
    },
    {
      message: 'I’m doing great! Are we still on for today?',
      messageTime: '10:35 AM',
      senderName: 'Alice',

      isSenderUser: false
    },
    {
      message: 'Yes, absolutely! Looking forward to it.',
      messageTime: '10:40 AM',
      senderName: 'You',

      isSenderUser: true
    },
    {
      message:
        'Technology has revolutionized the way we communicate, work, and live, enabling faster connections, greater efficiency, and unprecedented access to information across the globe every day.',
      messageTime: '10:40 AM',

      senderName: 'You',

      isSenderUser: true
    },
    {
      message: 'That’s so true! Technology has made life so much easier.',
      messageTime: '10:45 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      message: 'Absolutely! By the way, did you finish the project we discussed?',
      messageTime: '10:50 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      message: 'Yes, I did! I’ll send it to you shortly.',
      messageTime: '10:55 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      message: 'Great! Let me know if you need any feedback.',
      messageTime: '11:00 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      message: 'Sure thing! Thanks for your help.',
      messageTime: '11:05 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      message: 'Hi',
      messageTime: '11:05 AM',
      senderName: 'Alice',
      isSenderUser: false
    }
  ]
  return (
    <div
      className={twMerge('px-4 flex flex-col gap-4 flex-1 overflow-y-auto', className)}
      {...props}
    >
      {messages.map((message) => (
        <ChatMessage key={message.message} {...message} />
      ))}
    </div>
  )
}
