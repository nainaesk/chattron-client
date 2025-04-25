import { ConversationItem } from '@shared/models'

export const ChatMessagesMock: Record<string, ConversationItem[]> = {
  jewiweulr: [
    {
      id: '1',
      message: 'Hey, how are you?',
      messageTime: '10:30 AM',
      senderName: 'Alice',
      isSenderUser: false
    },
    {
      id: '2',
      message: 'I’m good, thanks! How about you?',
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
    }
  ],
  bob123: [
    {
      id: '1',
      message: 'Hi Bob, did you get the files?',
      messageTime: '9:00 AM',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '2',
      message: 'Yes, I got them. Thanks!',
      messageTime: '9:15 AM',
      senderName: 'Bob',
      isSenderUser: false
    }
  ],
  charlie456: [
    {
      id: '1',
      message: 'Hey Charlie, can you send me the files?',
      messageTime: 'Yesterday',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '2',
      message: 'Sure, I’ll send them over shortly.',
      messageTime: 'Yesterday',
      senderName: 'Charlie',
      isSenderUser: false
    }
  ],
  diana789: [
    {
      id: '1',
      message: 'Hi Diana, let me know when you’re free.',
      messageTime: '2 days ago',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '2',
      message: 'Will do! Thanks for checking in.',
      messageTime: '2 days ago',
      senderName: 'Diana',
      isSenderUser: false
    }
  ],
  eve101: [
    {
      id: '1',
      message: 'Happy Birthday, Eve! 🎉',
      messageTime: '12/03/2025',
      senderName: 'You',
      isSenderUser: true
    },
    {
      id: '2',
      message: 'Thank you so much! 😊',
      messageTime: '12/03/2025',
      senderName: 'Eve',
      isSenderUser: false
    }
  ]
}
