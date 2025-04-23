import { create } from 'zustand'
import { ChatSlice, createChatSlice, createTabSlice, TabSlice } from './slices'

export const useAppStore = create<TabSlice & ChatSlice>((...args) => ({
  ...createTabSlice(...args),
  ...createChatSlice(...args)
}))
export type AppStore = ReturnType<typeof useAppStore>
