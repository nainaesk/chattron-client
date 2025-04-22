import { ChatListItem } from '@/components'
import { ChatListItemStatus } from '@shared/models'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const ChatList = ({ className, ...props }: ComponentProps<'div'>) => {
  const chatData: {
    senderName: string // Sender name
    lastMessageTime: string // Last message time
    unreadMessagesCount?: number // Number of new messages
    lastMessagestatus?: ChatListItemStatus // Message status,
    previewMessage: string // Last message preview
  }[] = [
    {
      senderName: 'Alice',
      lastMessageTime: '10:30 AM',
      unreadMessagesCount: 3,
      lastMessagestatus: 'seen',
      previewMessage: 'Hey, are we still on for today?'
    },
    {
      senderName: 'Bob',
      lastMessageTime: '9:15 AM',
      unreadMessagesCount: 0,
      lastMessagestatus: 'delivered',
      previewMessage: 'Got it, thanks!'
    },
    {
      senderName: 'Charlie',
      lastMessageTime: 'Yesterday',
      unreadMessagesCount: 1,
      lastMessagestatus: 'sent',
      previewMessage: 'Can you send me the files?'
    },
    {
      senderName: 'Diana',
      lastMessageTime: '2 days ago',
      unreadMessagesCount: 0,
      lastMessagestatus: 'seen',
      previewMessage: 'Let me know when you’re free.'
    },
    {
      senderName: 'Eve',
      lastMessageTime: '12/03/2025',
      unreadMessagesCount: 5,
      lastMessagestatus: 'recieved',
      previewMessage: 'Happy Birthday! 🎉'
    }
  ]
  return (
    <div className={twMerge('flex flex-col py-2 overflow-y-auto gap-1', className)} {...props}>
      {chatData.map((chat) => (
        <ChatListItem key={chat.senderName} {...chat} />
      ))}
    </div>
  )
}
