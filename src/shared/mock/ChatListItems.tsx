import { ChatListItem } from '@shared/models'

export const chatData: ChatListItem[] = [
  {
    id: Math.random() + 'as',
    senderName: 'Alice',
    lastMessageTime: '10:30 AM',
    unreadMessagesCount: 3,
    lastMessagestatus: 'seen',
    previewMessage: 'Hey, are we still on for today?'
  },
  {
    id: Math.random() + 'as',
    senderName: 'Bob',
    lastMessageTime: '9:15 AM',
    unreadMessagesCount: 0,
    lastMessagestatus: 'delivered',
    previewMessage: 'Got it, thanks!'
  },
  {
    id: Math.random() + 'as',
    senderName: 'Charlie',
    lastMessageTime: 'Yesterday',
    unreadMessagesCount: 1,
    lastMessagestatus: 'sent',
    previewMessage: 'Can you send me the files?'
  },
  {
    id: Math.random() + 'as',
    senderName: 'Diana',
    lastMessageTime: '2 days ago',
    unreadMessagesCount: 0,
    lastMessagestatus: 'seen',
    previewMessage: 'Let me know when you’re free.'
  },
  {
    id: Math.random() + 'as',
    senderName: 'Eve',
    lastMessageTime: '12/03/2025',
    unreadMessagesCount: 5,
    lastMessagestatus: 'recieved',
    previewMessage: 'Happy Birthday! 🎉'
  }
]
