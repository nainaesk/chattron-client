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
