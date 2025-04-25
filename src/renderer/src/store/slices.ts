import { getConversationByChatListItemId } from '@renderer/services/chat.service'
import { ConversationItem } from '@shared/models'
import { ActiveTab } from '@shared/tabs.model'
import { StateCreator } from 'zustand'

export interface TabSlice {
  activeTab: ActiveTab
  changeActiveTab: (tab: ActiveTab) => void
}

export const createTabSlice: StateCreator<TabSlice> = (set) => ({
  activeTab: 'dm',
  changeActiveTab: (tab) => set({ activeTab: tab })
})

export interface ChatSlice {
  selectedChatId: string | null
  setSelectedChatId: (id: string | null) => void
  currentConversation: ConversationItem[] | null
  openChatBubbleMenuId: string | null
  setOpenChatBubbleMenuId: (id: string | null) => void
}

export const createChatSlice: StateCreator<ChatSlice> = (set) => ({
  selectedChatId: null,
  setSelectedChatId: async (id) => {
    set({ selectedChatId: id })
    if (!id) return
    try {
      set({ currentConversation: null })
      const conversation = await getConversationByChatListItemId(id)
      set({ currentConversation: conversation })
    } catch (error) {
      console.error('Failed to fetch conversation: ', error)
      set({ currentConversation: null })
    }
  },
  currentConversation: null,
  openChatBubbleMenuId: null,
  setOpenChatBubbleMenuId: (id) => set({ openChatBubbleMenuId: id })
})

export interface AuthSlice {
  isAuthenticated: boolean
  setAuthenticated: (isAuthenticated: boolean) => void
  logout: () => void
}
export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthenticated: false,
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  logout: () => set({ isAuthenticated: false })
})
