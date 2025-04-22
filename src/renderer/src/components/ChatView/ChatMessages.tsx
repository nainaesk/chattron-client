import { ChatMessage } from '@/components'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const ChatMessages = ({ className, ...props }: ComponentProps<'div'>) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null) // Track which menu is open

  const messages: {
    id: string
    message: string
    messageTime: string
    senderName: string
    isSenderUser: boolean
  }[] = [
    {
      id: '1',
      message: 'Hey, how are you?',
      messageTime: '10:30AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      id: '2',
      message: 'I’m good, thanks! How about you? I have been thinking about food a lately.',
      messageTime: '10:32 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '3',
      message: 'I’m doing great! Are we still on for today?',
      messageTime: '10:35 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      id: '4',
      message: 'Yes, absolutely! Looking forward to it.',
      messageTime: '10:40 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '5',
      message:
        'Technology has revolutionized the way we communicate, work, and live, enabling faster connections, greater efficiency, and unprecedented access to information across the globe every day.',
      messageTime: '10:40 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '6',
      message: 'That’s so true! Technology has made life so much easier.',
      messageTime: '10:45 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      id: '7',
      message: 'Absolutely! By the way, did you finish the project we discussed?',
      messageTime: '10:50 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '8',
      message: 'Yes, I did! I’ll send it to you shortly.',
      messageTime: '10:55 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      id: '9',
      message: 'Great! Let me know if you need any feedback.',
      messageTime: '11:00 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '10',
      message: 'Sure thing! Thanks for your help.',
      messageTime: '11:05 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      id: '11',
      message: 'Hi',
      messageTime: '11:05 AM',
      senderName: 'Alice',
      isSenderUser: false
    }
  ]

  const handleMenuToggle = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id)) // Toggle the menu
  }

  const handleOutsideClick = () => {
    setOpenMenuId(null) // Close the menu when clicking outside
  }

  return (
    <div
      className={twMerge('px-4 flex flex-col gap-4 flex-1 overflow-y-auto', className)}
      onClick={handleOutsideClick} // Close menu on outside click
      {...props}
    >
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          isMenuOpen={openMenuId === message.id} // Pass open state
          onMenuToggle={handleMenuToggle} // Pass toggle handler
          {...message}
        />
      ))}
    </div>
  )
}
