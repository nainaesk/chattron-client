export type ChatListItemStatus = 'recieved' | 'sent' | 'delivered' | 'seen'

export interface ChatListItem {
  id: string
  senderName: string // Sender name
  lastMessageTime: string // Last message time
  unreadMessagesCount?: number // Number of new messages
  lastMessagestatus?: ChatListItemStatus // Message status,
  previewMessage: string // Last message preview
}

export type ConversationItem = {
  id: string
  message: string
  messageTime: string
  senderName: string
  isSenderUser: boolean
}
