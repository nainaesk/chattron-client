export type ChatListItemStatus = 'recieved' | 'sent' | 'delivered' | 'seen'

export type ConversationItem = {
  id: string
  message: string
  messageTime: string
  senderName: string
  isSenderUser: boolean
}
