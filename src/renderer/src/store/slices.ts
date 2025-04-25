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
  openChatBubbleMenuId: string | null
  setOpenChatBubbleMenuId: (id: string | null) => void
}

export const createChatSlice: StateCreator<ChatSlice> = (set) => ({
  selectedChatId: null,
  setSelectedChatId: (id) => set({ selectedChatId: id }),
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
