import { chatData } from '@shared/mock/ChatListItems'
import { ChatMessagesMock } from '@shared/mock/ChatMessages'
import { ChatListItemType, ConversationItem } from '@shared/models'
// import axios from 'axios'

// const API_BASE_URL = 'https://your-api-url.com' // Replace with your actual API base URL

// Function to fetch chat list items
// export const getChatListItems = async (): Promise<ChatListItem[]> => {

//   try {
//     const response = await axios.get(`${API_BASE_URL}/chat-list`)
//     return response.data as ChatListItem[]
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error('Error fetching chat list items:', error)
//       throw new Error(error.response?.data?.message || 'Failed to fetch chat list items.')
//     }
//     console.error('Unexpected error:', error)
//     throw new Error('An unexpected error occurred.')
//   }
// }

// Function to simulate fetching chat list items
export const getChatListItems = async (): Promise<ChatListItemType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chatData) // Return mock data after a delay
    }, 5000) // Simulate 1 second delay
  })
}

// Function to fetch conversation by chatListItemId
// export const getConversationByChatListItemId = async (
//   chatListItemId: string
// ): Promise<ConversationItem[]> => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/conversations/${chatListItemId}`)
//     return response.data as ConversationItem[]
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error('Error fetching chat list items:', error)
//       throw new Error(error.response?.data?.message || 'Failed to fetch chat list items.')
//     }
//     console.error('Unexpected error:', error)
//     throw new Error('An unexpected error occurred.')
//   }
// }

export const getConversationByChatListItemId = async (
  chatListItemId: string
): Promise<ConversationItem[]> => {
  console.log(chatListItemId)
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const conversation = ChatMessagesMock[chatListItemId]
        if (conversation) {
          resolve(conversation)
        } else {
          reject(new Error('Conversation not found for the given chatListItemId.'))
        }
      },
      Math.floor(Math.random() * 1000)
    )
  })
}
