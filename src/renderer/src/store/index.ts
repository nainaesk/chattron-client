import { create } from 'zustand'
import {
  AuthSlice,
  ChatSlice,
  createAuthSlice,
  createChatSlice,
  createTabSlice,
  TabSlice
} from './slices'

export const useAppStore = create<TabSlice & ChatSlice & AuthSlice>((...args) => ({
  ...createTabSlice(...args),
  ...createChatSlice(...args),
  ...createAuthSlice(...args)
}))
export type AppStore = ReturnType<typeof useAppStore>
