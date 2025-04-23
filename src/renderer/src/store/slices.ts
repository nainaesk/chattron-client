import { ActiveTab } from '@shared/tabs.models'
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
  openChatBubbleMenuId: string | null
  setOpenChatBubbleMenuId: (id: string | null) => void
}

export const createChatSlice: StateCreator<ChatSlice> = (set) => ({
  openChatBubbleMenuId: null,
  setOpenChatBubbleMenuId: (id) => set({ openChatBubbleMenuId: id })
})
